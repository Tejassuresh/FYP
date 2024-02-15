import { styled } from "@mui/material";
import CrimeRepo from "./ReportCrime";


const MainDiv=styled('div')({
    display:'flex',
})
const LeftDiv=styled('div')({
    background:'#dddddd',
    width:'60%',
    margin:'20px',
    padding:"20px",
    paddingLeft:'30px',
    paddingTop:'30px',
    height:'100%'
    
});

const RightDiv=styled('div')({
    width:'40%',
    
    margin:'2px',
    // marginTop:'80px',
    // padding:"50px",
    // height:'150px'
    
});

const UserInfo=styled('div')({
    backgroundColor:'#dddddd',
    margin:'20px',
    padding:"20px",
})
const ReportCrime=styled('div')({
    backgroundColor:'#dddddd',
    margin:'20px',
    padding:"10px",
    fontSize:'25px',
    textAlign:'center'
})

const Crime=styled('div')({
    backgroundColor:'#ffecf2',
    margin:'20px',
    padding:"30px",
    
})

const UserDash = ()=>{
    return(
        <>
            <MainDiv>
                <LeftDiv>
                    <table>
                        <tr>
                            <th><u>Crimes</u></th>
                            <th><u>Details</u></th>
                        </tr>
                        <tr>
                            <th>Lorem, ipsum</th>
                            <tr>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem ad dolorem quas odio quibusdam fugit voluptatum, nam dignissimos consequatur commodi enim aspernatur veniam, doloribus iste laudantium natus ipsum ex.</tr>
                        </tr>
                        <tr>
                            <th>Lorem, ipsum</th>
                            <tr>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem ad dolorem quas odio quibusdam fugit voluptatum, nam dignissimos consequatur commodi enim aspernatur veniam, doloribus iste laudantium natus ipsum ex.</tr>
                        </tr>
                        <tr>
                            <th>Lorem, ipsum</th>
                            <tr>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem ad dolorem quas odio quibusdam fugit voluptatum, nam dignissimos consequatur commodi enim aspernatur veniam, doloribus iste laudantium natus ipsum ex.</tr>
                        </tr>
                        <tr>
                            <th>Lorem, ipsum</th>
                            <tr>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem ad dolorem quas odio quibusdam fugit voluptatum, nam dignissimos consequatur commodi enim aspernatur veniam, doloribus iste laudantium natus ipsum ex.</tr>
                        </tr>
                        <tr>
                            <th>Lorem, ipsum</th>
                            <tr>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem ad dolorem quas odio quibusdam fugit voluptatum, nam dignissimos consequatur commodi enim aspernatur veniam, doloribus iste laudantium natus ipsum ex.</tr>
                        </tr>
                        <tr>
                            <th>Lorem, ipsum</th>
                            <tr>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem ad dolorem quas odio quibusdam fugit voluptatum, nam dignissimos consequatur commodi enim aspernatur veniam, doloribus iste laudantium natus ipsum ex.</tr>
                        </tr>
                        <tr>
                            <th>Lorem, ipsum</th>
                            <tr>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem ad dolorem quas odio quibusdam fugit voluptatum, nam dignissimos consequatur commodi enim aspernatur veniam, doloribus iste laudantium natus ipsum ex.</tr>
                        </tr>
                        
                    </table>
                </LeftDiv>
                <RightDiv>
                    <UserInfo>
                        <b>User details </b>
                        <p>Name:</p>
                        <p>Aadhar No:</p>
                    </UserInfo>
                    <ReportCrime>
                        <b>Report A Crime</b>
                    </ReportCrime>
                    <Crime>
                        <CrimeRepo></CrimeRepo>
                    </Crime>
                </RightDiv>
            </MainDiv>
        </>
    )
}

export default UserDash