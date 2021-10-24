import Link from 'next/link'
import { Button } from 'antd'
import {CalendarOutlined,RightCircleOutlined } from "@ant-design/icons"
interface Iprops{
    post:{
        frontmatter:{
            cover_image:string,
            date:any,
            title:string,
            excerpt:string,
            tags:Array<string>
        },
        slug:string
    }
}
const Post:React.FC<Iprops>=(props:Iprops )=> {
    console.log(props)
  return (
    <div className='card'>
      <img  src={props.post.frontmatter.cover_image} alt='' />

      <div className='post-date' >
        <CalendarOutlined />{props.post.frontmatter.date}
      

      <h3 className="post-title">{props.post.frontmatter.title}</h3>
      {props.post.frontmatter.tags.map((tag:string,index:number)=>{
          return(
            <Button key={index} type="default" shape="round" size="small" style={{backgroundColor:'gold'}}>{tag}</Button>
          )
      })}
      <p>{props.post.frontmatter.excerpt}</p>

      <Link href={`/blog/${props.post.slug}`}>
        <Button type="default" shape="round" danger><RightCircleOutlined />CONTINUE READING</Button>
      </Link>
      </div>
    </div>
  )
}
export default Post