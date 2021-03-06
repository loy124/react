import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "cb772a50acc4cd6917b12854484b9d91",
    language: "ko-KR"
  }
});


export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),

  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term) //인코딩해서 문자열로 검색
      }
    }),
  videos: id => api.get(`movie/${id}/videos`),
  collections: (id) => api.get(`collection/${id}`)
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    }),
  videos: id => api.get(`tv/${id}/videos`)
};

export const CollectionApi = {
  collectionDetail: id => api.get(`collection/${id}`)

}