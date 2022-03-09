const React = require('react');
const DefaultLayout = require('../Default');

class Show extends React.Component{
    render(){
        const { fruit } = this.props
        return(
            <DefaultLayout>
            <div>
                <h2>
                    {fruit.name}
                    {fruit.readyToEat ? ' - is ready to eat' : ' - is not yet ready to be consumed'}
                </h2>
                <h3>The {fruit.name} is {fruit.color}</h3>
                <a href={`/fruits/${ fruit._id }/Edit`}><button>Edit</button></a>
                <form action={`/fruits/${ fruit._id }?_method=DELETE`} method='POST'>
                    <input type="submit" value="Delete" />
                </form>
                <a href='/fruits/'><button>Bak to Main</button></a>
            </div>
            </DefaultLayout>
        );
    };
};

module.exports = Show;