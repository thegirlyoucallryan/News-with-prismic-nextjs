

import { Client } from "../../prismic-config";
import {RichText} from 'prismic-reactjs';
import { Link } from "prismic-reactjs";
import Layout from '../../components/Layout';



export default function Article ({article}){
    
    return(
        <Layout>
            <div className="w-2/3 mx-auto">
                <h1 className="text-3xl uppercase font-bold opacity-50 my-10">
                    {RichText.render(article.data.title)}
                </h1>
            <img className="shadow-xl mb-20" src={article.data.image.url} alt={article.data.title}/>
                <h2 className="text-lg opacity-75">
                    {/* {article.data.textbox.map((textbox) => textbox)} */}
                </h2>
                <Link href='/'>
                    <button className="bg-black text white py-3 px-10">
                        Back to Home &nbsp; 📰
                    </button>
                </Link>


            
                
                 </div>

        </Layout>


    )

    

}



//on each request this gets called

export async function getServerSideProps(context) {
    
    const article = await Client().getByUID("article", context.query.article);
    // const article = await res.json()

   
        return {
      props: {
        article,
      },
    };
  }