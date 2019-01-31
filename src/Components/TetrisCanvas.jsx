import React, { Component } from 'react';
import p5 from 'p5'
import {createPeace} from '../shapes'

const matrix = [

]

const shapes = ["I","T","O","L","J","Z","S"]





class TetrisCanvas extends Component {

  state ={
    matrix: [
      [0,0,0],
      [1,1,1],
      [0,0,1],],
    pos: {x:8,y:0}
  }

  blankCanvas=()=> {
    let ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(0,0, 900, 900);
    ctx.fillRect(50,50,10,10)
    ctx.fillStyle ="black"
    ctx.scale(20,20)

  }

  draw=()=> {

    //
    // let ctx = this.refs.canvas.getContext('2d');
    // ctx.clearRect(20,20,10,900);
    // // ctx.fillStyle ="black"


    this.drawMatrix(this.state.matrix,this.state.pos)
  }


  updateCanvas=()=> {
        let ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(20, 20, 500, 700)
        // ctx.fillStyle ="black"
        ctx.scale(20,20)
      }

    update=()=>{
        this.draw()
       setInterval(()=> this.setState({
        pos: {...this.state.pos, y: this.state.pos.y+1}
      },() => {
        this.draw()
      }),1000)


    }

      drawMatrix=(matrix,offset)=> {
        let ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(20,20,500,700)
        matrix.forEach((row,y) => {
          row.forEach((value,x)=> {
            if (value !== 0) {
              ctx.fillStyle ="blue"
              ctx.fillRect(x+ offset.x,y+ offset.y,1,1)

            }
          })
        })
      }




  componentDidMount(){
    this.updateCanvas()
    // this.draw()
    this.update()


    // this.sketch = new p5(p => {
    //   console.log(p);
    //
    //
    //   p.setup = () => {
    //     p.createCanvas(400, 500).parent(this.renderRef.current)
    //   }
    //
    //
    //   p.draw = () => {
    //     let piece = createPeace("T")
    //     piece.forEach((row,y) => {
    //       row.forEach((value,x)=> {
    //         if (value !== 0) {
    //           p.background(0)
    //           p.fill("red")

              // p.piece(this.state.x,this.state.y)
        //     }
        //   })
        // })
        // console.log(piece)
        // p.background(0, 25,25)
        // p.fill('red')
        // p.circle(this.state.x,this.state.y,50,50)
    //   }
    //
    //   setInterval(()=> this.setState({
    //     y: this.state.y + 1
    //   }),10)
    //
    //
    // })

  }


  render() {
    console.log(this.state);
    this.renderRef = React.createRef()

    return (
      <div>
       <canvas ref="canvas" width={400} height={700} style={{"border":"1px solid #900;"}}/>
      </div>
    );
  }

}

export default TetrisCanvas;

// <div ref={this.renderRef}></div>
