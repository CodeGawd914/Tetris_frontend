import React, { Component } from 'react';
import p5 from 'p5'
import {createPeace} from '../shapes'
import {connect} from 'react-redux'
import {matrixBag} from '../shapesAgain'
import {Button} from 'semantic-ui-react'



const createMatrix=(w,h)=> {
  const matrix = []
  while (h--){
    matrix.push(new Array(w).fill(0))
  }
  return matrix
}

class TetrisCanvas extends Component {
// <TetrisCanvas width={20} height={35} matrix={[blah]} pos={TetrisCanvas}
  state ={
    score: 0,
    arena: createMatrix(20, 35),
    matrix: [
      [0,0,0],
      [1,1,1],
      [0,1,0],],
    pos: {x:8,y:0},
    test: null
  }


  createMatrix=(w,h)=> {
    const matrix = []
    while (h--){
      matrix.push(new Array(w).fill(0))
    }
    return matrix
  }


  checkCollision = ()=> {
    for (let y = 0; y < this.state.matrix.length; ++y){
      for (let x = 0; x < this.state.matrix[y].length; ++x){
        if(this.state.matrix[y][x] !== 0 && (this.state.arena[y + this.state.pos.y] && this.state.arena[y + this.state.pos.y][x+this.state.pos.x]) !== 0){
          return true
          // this.setState({
          //   test: true,
          //   pos: {...this.state.pos, y: this.state.pos.y-1}
          // },(arena)=> this.mergeBlocks(arena))
        }
      }
    }
    return false
  }
  checkReset=()=>{
    if(this.checkCollision(this.state.arena)=== true && this.state.pos.y > -1){
      window.alert("ha ha uyou lose bet you didnt see that coming ")
      let arena = this.createMatrix(20,35)
      console.log("WAIT YOU NEED ME TO TEST ", this.state.arena.forEach(row => row.fill(0)))
      // this.props.handleScore(this.state.score)
      this.setState({
        arena: arena,
        score: 0
      })
    }
  }

  mergeBlocks =(arena)=> {
    this.state.matrix.forEach((row,y)=>{
      row.forEach((value,x)=> {
        if(value !== 0){
          arena[y+ this.state.pos.y][x+ this.state.pos.x] = value
        }
      })
    })
    // this.setState({pos: {...this.state.pos, y: 0}})
  }


  newDrop=()=>{
    const shapes = ["I","T","O","L","J","Z","S"]
    let randomShapes = shapes[Math.floor(Math.random() * shapes.length)]
    let piece = createPeace(randomShapes)
    this.mergeBlocks(this.state.arena)
    this.arenaClear()
    this.setState({
      matrix: piece,
      pos: {...this.state.pos, y: 1, x: 8}
    },() => this.checkReset(piece))
  }

  draw=()=> {
    let ctx = this.refs.canvas.getContext('2d');
    let arena = this.state.arena
    ctx.fillStyle ="#000";
    ctx.fillRect(0,0,500,700)
    if(this.checkCollision(arena) === false){
      this.drawMatrix(this.state.matrix,this.state.pos,ctx)
    } else if (this.checkCollision(arena) === true){
      this.setState({
        pos: {...this.state.pos, y: this.state.pos.y-1}
      },() => this.newDrop() )
    }
    this.drawMatrix(arena,{x:0,y:0},ctx)
  }
  // this.drawMatrix(this.state.matrix,this.state.pos,ctx)

  playerRotate=()=>{
    if (this.checkCollision(this.state.arena)=== true){
      this.rotateMatrix()
    }
  }

  rotateMatrix = () => {
    for (let y = 0; y < this.state.matrix.length; ++y){
      for (let x = 0; x < y; ++x){
        [
          this.state.matrix[x][y],
          this.state.matrix[y][x],
        ] = [
          this.state.matrix[y][x],
          this.state.matrix[x][y],
        ]
      }
    }
      this.setState({
        matrix: this.state.matrix.reverse()
      },()=> this.draw())
  }

  arenaClear= ()=> {
    let rowCount = 1
    outer: for (let y = this.state.arena.length -1; y > 0; --y){
      for(let x = 0; x < this.state.arena[y].length; ++x){
        if(this.state.arena[y][x] === 0){
          continue outer
        }
      }
      const row = this.state.arena.splice(y,1)[0].fill(0)
        this.state.arena.unshift(row)
        ++y

        this.setState({
          score: this.state.score += rowCount * 10
        })
    }
  }

  updateScore =()=> {
    this.setState({})
  }
  update=(ctx)=>{
    this.draw()
    this.dropMatrix(ctx)

  }

  updateCanvas=(ctx,arena)=> {
        // let ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(20, 20, 500, 700)
        ctx.fillStyle =
        ctx.scale(20,20)
        // this.update(ctx,arena)
      }

    dropMatrix=(ctx)=>{
      setInterval(()=> this.setState({
        pos: {...this.state.pos, y: this.state.pos.y+1}
      },() => {
        this.draw()
      }),300)
    }


    playerMove(dir){
      this.setState({pos: {...this.state.pos, x: this.state.pos.x+=dir}},()=> this.draw())
      if (this.checkCollision(this.state.arena)=== true){
        this.setState({pos: {...this.state.pos, x: this.state.pos.x-=dir}},()=> this.draw())
      }
    }

      drawMatrix=(matrix,offset,ctx)=> {
        const colors =[
          null,
          '#FF0000',
          '#00BFFF',
          '#00FF00',
          '#FF00FF',
          '#DAA520',
          '#FF8C00',
          '#1E90FF',
          '#F5F5F5'
        ]
        matrix.forEach((row,y) => {
          row.forEach((value,x)=> {
            if (value !== 0) {
              ctx.fillStyle =colors[value]
              ctx.fillRect(x+ offset.x,y+ offset.y,1,1)

            }
          })
        })
      }



  componentDidMount(){
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const arena = this.createMatrix(20,35)

    this.setState({arena})

    canvas.addEventListener("keydown",(e)=> console.log(e))
    // ctx.clearRect(0,0,20,20)
    this.updateCanvas(ctx)
    // this.draw(ctx)
    this.update(ctx)
    // debugger

    // console.log("chicken",this.checkCollision(arena));

    // console.log(arena);
    // console.table(arena)


  }

onKeyPressed =(e,ctx)=> {
  console.log(e);
  if (e.keyCode === 37){
    this.playerMove(-1)
    // this.setState({pos: {...this.state.pos, x: this.state.pos.x-1}},()=> this.draw())
  } else if (e.keyCode === 39){
    this.playerMove(+1)
    // this.setState({pos: {...this.state.pos, x: this.state.pos.x+1}},()=> this.draw())
  } else if (e.keyCode === 40){
    this.setState({pos: {...this.state.pos, y: this.state.pos.y+1}},()=> this.draw())
  } else if (e.keyCode === 38) {
    this.rotateMatrix()
  }
}


  render() {
    this.renderRef = React.createRef()

    return (

      <div
        >
        <Button basic color ='red'>
        Your Total Score{this.state.score}
        </Button>
       <canvas
        tabIndex='1'
        onKeyDown={(e) => this.onKeyPressed(e)}
        ref="canvas" width={400} height={700} style={{"border":"1px solid #999"}}/>
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
