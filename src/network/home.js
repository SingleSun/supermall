import {request} from "@/network/request";

//首页请求封装
export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}
