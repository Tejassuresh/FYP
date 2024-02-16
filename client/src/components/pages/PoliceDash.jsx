import { styled } from "@mui/material";
const MainDiv=styled('div')({
    display:'flex',
})

const Map=styled("div")({
    backgroundColor:'#87CEEB', 
    height:'600px',
    margin:'40px',
    padding:"20px",
    
})
const Right=styled('div')({
    
    width:'60%',
    
    
})
const Left=styled("div")({
    width:'40%',
    margin:'20px',
    

})
const Graph=styled("div")({
    backgroundColor:"#E6E6FA",
    height:'350px',
    width:'85%',
    margin:'20px',
    padding:"20px",
})
const Stats=styled("div")({
    backgroundColor:'#F0F8FF',
    height:'300px',
    width:'85%',
    margin:'20px',
    padding:"20px",

})

const Crimebutton=styled("div")({
    margin:'40px',
    // padding:"20px",
    
})
const PoliceDash=()=>{
    return(
        <>
            <MainDiv>
                <Left>
                    <Graph>
                        <p>Graph here</p>
                    </Graph>
                    <Stats>
                        Statics
                    </Stats>
                </Left>
                <Right>
                    <Map>
                        This is the map
                    </Map>
                    <Crimebutton>
                        <button style={{
                            width:'400px',
                            height:"70px",
                            backgroundColor:'#FED8B1'
                        }}>Fetch Crime Data</button>
                    </Crimebutton>
                </Right>
            </MainDiv>
        </>
    )
}

export default PoliceDash