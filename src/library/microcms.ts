//SDK利用準備
import { createClient, type MicroCMSImage, type MicroCMSListContent, type MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// export async function getStaticPaths() {
//     const response = await getBlogs({ fields: ["id"] });
//     return response.contents.map((content: any) => ({
//       params: {
//         blogId: content.id,
//       },
//     }));
//   }
  

//型定義
export type New = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
//   image: MicroCMSImage;
  image:{
    url: string;
  }
  tags: string;
  sam:{
    url: string;
  };
  intro: string;
  name: string;
//   
  content: string;
};
export type NewResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: New[];
  id: string;
};
// export type Tag = {
//     tags: string[];
//     id: string;
// }

 
//APIの呼び出し
// export const getTags = async (queries?: any) => {
//     return await client.get<Tag>({ endpoint: "blogs", queries });
//   };

export const getNews = async (queries?: any) => {
    return await client.get<NewResponse>({ 
        endpoint: "news", 
        queries 
    });
};

export const getBlogDetail = async (contentId: string, queries?: any) => {
  return await client.getListDetail<New>({
    endpoint: "news",
    contentId,
    queries,
  });
};

export const getTags = async (contentId: string, queries?: any) => {
    return await client.get<New>({
      endpoint: "news",
      contentId,
      queries
    });
  };

// export const getTags = async(queries?: any) => {
//     return await client.get<BlogResponse>({ endpoint: "blogs", queries });
//   };