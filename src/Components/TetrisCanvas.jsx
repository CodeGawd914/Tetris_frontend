import React, { Component } from 'react';
import p5 from 'p5'
import {createPeace} from '../shapes'
import {connect} from 'react-redux'


const shapes = ["I","T","O","L","J","Z","S"]


class TetrisCanvas extends Component {

  state ={
    matrix: [
      [0,0,0],
      [1,1,1],
      [0,1,0],],
    pos: {x:8,y:0}
  }


  createMatrix=(w,h)=> {
    const matrix = []
    while (h--){
      matrix.push(new Array(w).fill(0))
    }
    return matrix
  }

  checkCollision = (arena)=> {
    for (let y = 0; y < this.state.matrix.length; ++y){
      for (let x = 0; x < this.state.matrix[y].length; ++x){
        if(this.state.matrix[y][x] !== 0 && (arena[y + this.state.pos.y] && arena[y + this.state.pos.y][x+this.state.pos.x]) !== 0){
          return true
        }
      }
    }
    return false
  }

  mergeBlocks =(arena)=> {
    this.state.matrix.forEach((row,y)=>{
      row.forEach((value,x)=> {
        if(value !== 0){
          arena[y+ this.state.pos.y][x+ this.state.pos.x] = value
        }
      })
    })
  }

  draw=()=> {
    let ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle ="#000";
    ctx.fillRect(0,0,500,700)
    this.drawMatrix(this.state.matrix,this.state.pos,ctx)
  }


  updateCanvas=(ctx)=> {
        // let ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(20, 20, 500, 700)
        ctx.fillStyle =
        ctx.scale(20,20)
        this.update(ctx)
      }

    update=(ctx)=>{
        this.draw(ctx)

       setInterval(()=> this.setState({
        pos: {...this.state.pos, y: this.state.pos.y+1}
      },() => {
        this.draw(ctx)
      }),1000)


    }

      drawMatrix=(matrix,offset,ctx)=> {
        // let ctx = this.refs.canvas.getContext('2d');
        matrix.forEach((row,y) => {
          row.forEach((value,x)=> {
            if (value !== 0) {
              // ctx.createPattern(matrix,"repeat")
              // ctx.clearRect(20,20,500,700)
              ctx.fillStyle ="blue"
              ctx.fillRect(x+ offset.x,y+ offset.y,1,1)

            }
          })
        })
      }

  componentWillUpdate(){
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")


    }



  componentDidMount(){
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    canvas.addEventListener("keydown",(e)=> console.log(e))
    // ctx.clearRect(0,0,20,20)
    this.updateCanvas(ctx)

    // this.draw(ctx)
    this.update(ctx)
    const arena = this.createMatrix(12,20)

    this.checkCollision(arena)

    console.log(arena);
    console.table(arena)
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

onKeyPressed =(e,ctx)=> {
  console.log(e);
  if (e.keyCode === 37 && this.state.pos.x-1 >= 0){
    this.setState({pos: {...this.state.pos, x: this.state.pos.x-1}},()=> this.draw())
  } else if (e.keyCode === 39){
    this.setState({pos: {...this.state.pos, x: this.state.pos.x+1}},()=> this.draw())
  } else if (e.keyCode === 40){
    this.setState({pos: {...this.state.pos, y: this.state.pos.y+1}},()=> this.draw())
  }
}


  render() {
    console.log(this.state);
    this.renderRef = React.createRef()

    return (
      <div

        >
       <canvas
        tabindex='1'
        onKeyDown={(e) => this.onKeyPressed(e)}
        ref="canvas" width={400} height={700} style={{"border":"1px solid #900;"}}/>
      </div>
    );
  }

}
const mapStatetoProps = (state) => {
  console.log(state)
  return state
}

const mapDispatchToProps = (dispatch) => {

  console.log(dispatch)
}

export default connect(mapStatetoProps,mapDispatchToProps)(TetrisCanvas);

// <div ref={this.renderRef}></div>
