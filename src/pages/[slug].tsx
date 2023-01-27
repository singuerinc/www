import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../lib/api";
import Head from "next/head";
import markdownToHtml from "../lib/markdownToHtml";

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <div>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | singuerinc</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              <pre>{JSON.stringify(post, null, 2)}</pre>
            </article>
          </>
        )}
      </div>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "date",
    "title",
    "category",
    "role",
    "client",
    "agency",
    "tech",
    "tags",
    "image",
    "image_home",
    "www",
    "more",
    "priority",
    "content",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
