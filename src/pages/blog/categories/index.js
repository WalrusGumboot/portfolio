import * as React from "react";
import { graphql, navigate } from "gatsby"
import Frame from "../../components/frame"

export const query = graphql `
query CategoryQuery {
    allSanityCategory {
        nodes {
            title
            description
        }
    }
}
`

const CategoriesPage = ( {data} ) => {
    const categories = data.allSanityCategory.nodes;

    return (
        <Frame>
            <div className="gap-y-12">
            {
                categories.map( cat => (
                    <div className="bg-emerald-100 hover:shadow-md hover:bg-emerald-400 p-4 mb-4 rounded-md hover:cursor-pointer w-full transition-all"
                     onClick={ () => navigate("/category/"+cat.title)} role="link">
                        <h3 className="text-3xl mb-4">{cat.title}</h3>
                        <p>{cat.description}</p>
                    </div>
                ))
            }
            </div>
        </Frame>
    )
} 

export default CategoriesPage