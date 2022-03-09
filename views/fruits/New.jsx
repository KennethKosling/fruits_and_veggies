const React = require('react');
const DefaultLayout = require('../Default');

class New extends React.Component{
    render(){
        return(
            <DefaultLayout>
            <form action="/fruits" method="post">
                <fieldset>
                <legend>Create a New Fruit</legend>
                <label>
                    NAME:<input type="text" name="name" placeholder="Enter fruit name" />
                </label>
                <label>
                    COLOR:<input type="text" name="color" placeholder="Enter fruit color" />
                </label>
                <label> READY TO EAT:<input type="checkbox" name="readyToEat" /> </label>
                </fieldset>
                <input type="submit" value="Submit New Fruit" />
            </form>
            </DefaultLayout>
        );
    };
};

module.exports = New;