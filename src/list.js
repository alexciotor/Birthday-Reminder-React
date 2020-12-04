import data from './data'
const neww = data.map(item=>{
    const {name,age,img}=item
    console.log(name,age,img);
    return item
})
console.log(neww);


const List =({props})=>{
    console.log(typeof props);
    return(
    props.map(person=>{
        const {img,name,age, id}=person
        return (
<article key={id}>
<img src={img} alt=""/>
<h4>{name}</h4>
<p>{age}</p>
</article>

        )
    })
    )
}
export default List