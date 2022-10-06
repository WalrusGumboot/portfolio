import * as React from "react";
import { graphql } from "gatsby"
import Frame from "../../components/frame"

export const query = graphql `
query CategoryQuery {
    allCategory {
        title
        description
    }
}
`

const CategoriesPage = ( {data} ) => {
    const categories = data.allCategory;

    return (
        <Frame>
            <div className="gap-y-12 flex flex-column">
            {
                categories.map( (cat) => (
                    <div className="bg-emerald-200 hover:shadow-md hover:bg-emerald-400 w-full transition-all"
                     onClick={ () => navigate("/category/"+cat.title)} role="link">
                        <h3 className="text-xl">{cat.title}</h3>
                        <p>{cat.description}</p>
                    </div>
                ))
            }
            </div>
        </Frame>
    )
} 

export default CategoriesPage