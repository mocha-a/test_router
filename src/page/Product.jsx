import Test_component from '../component/Test_component';

function Product(props) {
    props.c('blue')
    return (
        <>
            <article>
                <h1>React State & Props</h1>
                <div className='test'>
                    <Test_component title="1"/>
                    <Test_component title="2"/>
                </div>
            </article>
        </>
    )
}

export default Product