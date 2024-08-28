export default interface Post {
    imgsrc: URL,
    comments?: string[],
    title: string,
    description?: string,
    tags?: string[] 
}