import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state={
            topText:"",
            bottomText:"",
            image:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response=>{response.json()})
            .then(response=>{
                const {memes} = response.data
                this.setState({allMemeImgs:memes})
            })
    }
    handleChange(event) {
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }
    handleClick(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomImg = this.state.allMemeImgs[randNum].url
        this.setState({image:randomImg})
    }
    render() {
        
        return(
            <div>
                <form className="meme-form">
                    <input 
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />
                    <input 
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>Gen</button>
                </form>
                <div className="meme">
                    <img src="this.state.image"></img>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
    
}

export default MemeGenerator