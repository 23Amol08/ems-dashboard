import react from "react";
import Button from '@mui/material/Button';

function Home(){
    return (
        <div>
          <h1>This is Home</h1>
        <div>
            <Button variant="contained" href="/admin">Admin Dashboard</Button>
            <Button variant="contained" href="/employee">Employee Dashboard</Button>
        </div>
        </div>
    )
    
}

export default Home;
