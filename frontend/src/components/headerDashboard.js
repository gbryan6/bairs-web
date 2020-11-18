import React,{ useState, useEffect } from "react";
import Perfil from "../images/perfilP.jpg";
import "../styles/components/headerDashboard.css";
import { Link } from "react-router-dom";
import api from "../services/api";
// import { Container } from './styles';

function HeaderDashboard(props) {
  const Logged = props.userId;
  const [user, setUser] = useState([])
  const [instituition, setInstituition] = useState([]);

  useEffect(() => {
    async function loaddata() {
      await api.get(`/user/${Logged}`).then(response => {
        setUser(response.data)
      })
    }
    loaddata()
  }, [Logged])

  useEffect(() => {
    async function loadInstituition() {
       user.map(user => {
       api.get(`/instituitions/${user.instituition_id}`).then((response) => {
        setInstituition(response.data);
      });
    })
    }
    loadInstituition();
  }, [user]);


  return (
    <div className="headerdash__all">
      { user.map((user) => (
      <>
      <div className="dash__user">
        <div className="dash__img">
          <img src={user.profile_path === undefined ? Perfil : `http://localhost:3333/files/profile/picture/${user.profile_path}`} alt="Foto de perfi" />
        </div>
        <div className="dash__info">
          <h1>{user.full_name}</h1>
          {
            instituition.map(university =>
          <p>{`${university.name} - ${university.campus}`}</p>
            )}
          <Link
            to="/alterinfo"
            type="submit"
            id="button"
            style={{
              width: "187px",
              height: "37px",
              fontWeight: "500",
              fontSize: "15px",
            }}
          >
            Alterar informações
          </Link>
        </div>
      </div>
      </>
      ))
      }    
    </div>
  );
}

export default HeaderDashboard;
