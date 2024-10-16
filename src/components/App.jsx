import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";
import { HomePage } from "pages/Home/HomePage";
import { LoginPage } from "pages/Login/LoginPage";
import { RegisterPage } from "pages/Register/RegisterPage";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { Contacts } from "pages/Contacts/Contacts";

export const App = () => {
   return(
      <Routes>
         <Route path="/" element={<SharedLayout/>}>
            <Route index path="/" element={<HomePage/>}/>
            <Route 
               path="/login" 
               element={
                  <RestrictedRoute 
                     redirectTo="/contacts"
                     component={LoginPage}
                  />
               }/>
            <Route 
               path="/register" 
               element={
                  <RestrictedRoute 
                     redirectTo="/contacts"
                     component={RegisterPage}
                  />
               }/>
            <Route 
               path="/contacts"
               element={
                  <PrivateRoute
                     redirectTo="/login"
                     component={Contacts}
                  />
               }
            />
            <Route path="*" element={<PageNotFound/>}/>
         </Route>
      </Routes>
   )
}