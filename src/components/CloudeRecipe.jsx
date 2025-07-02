import ReactMarkdown from 'react-markdown'

export default function CloudeRecipe(props){
    return(
            <section className='suggested-recipe-container' aria-live='polite'>
                <h2>Chef recommends</h2>
                <ReactMarkdown>{props.markdown}</ReactMarkdown>
            </section>
    )
}