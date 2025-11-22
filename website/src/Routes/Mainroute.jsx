import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Singleprodatepage from "../Pages/Singleprodatepage";
import Likepage from "../Pages/Likepage";
import { Prodatehook } from "../Hook/Prodatehook";
import { LengthHook } from "../Hook/LengthHook";
import Purchase from "../Pages/Purchase";
import Cataousepage from "../Pages/Cataousepage";
import Carts from "../Pages/Carts";
import { CartsHook } from "../Hook/CartsHook";
import Signuppage from "../Pages/Signuppage";
import Loginpage from "../Pages/Loginpage";
import Prodatepage from "../Pages/Prodatepage";
import { AuthProvider } from '../Hook/AuthProvider'
import { Searchprovider } from "../Hook/Searchprovider";
import Accountpage from "../Pages/Accountpage";
import Errorpage from "../Pages/Errorpage";
import Mobilesearch from "../Pages/Mobilesearch";
function Mainroute() {
    return (
        <Router>
            <Prodatehook>
                <LengthHook>
                    <CartsHook>
                        <AuthProvider>
                            <Searchprovider>
                                <Routes>
                                    <Route path="/Home" element={<Homepage />}></Route>
                                    <Route path="/prodate/:id" element={<Singleprodatepage />}></Route>
                                    <Route path="/checkpro" element={<Likepage />} />
                                    <Route path="/purchase/:id" element={<Purchase />} />
                                    <Route path="/purchase" element={<Purchase />} />
                                    <Route path="/cataouse" element={<Cataousepage />} />
                                    <Route path="/carts" element={<Carts />} />
                                    <Route path="/signup" element={<Signuppage />} />
                                    <Route path="/" element={<Loginpage />} />
                                    <Route path="/catageory/:id" element={<Prodatepage />} />
                                    <Route path="/account" element={<Accountpage />} />
                                    <Route path="*" element={<Errorpage />} />
                                    <Route path="/searchmobile" element={<Mobilesearch />} />
                                </Routes>
                            </Searchprovider>
                        </AuthProvider>
                    </CartsHook>
                </LengthHook>
            </Prodatehook>
        </Router>
    )
}
export default Mainroute