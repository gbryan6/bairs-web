import React, {useState, useMemo} from "react";
import RegisterHead from "../components/registerHead.js";
import { AiOutlineCamera } from "react-icons/ai";

// import { Container } from './styles';
import "../styles/pages/registerad.css";

function RegisterAd() {
  const [thumbnail, setThumbnail] = useState(null);
  
  const preview = useMemo (()=> thumbnail ? URL.createObjectURL(thumbnail) : null, [thumbnail])



  return (
    <div className="newad__content">
      <RegisterHead title="O que gostaria de anunciar ?" />

      <div className="newad__registerarea">
        <div className="form__content--ad">
          <form action="">
            <div className="inputs__area">
              <div className="wrapper__ad">
                <label htmlFor="name">Qual produto ?</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Descrição</label>
                <textarea type="textarea" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Preço</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Categoria</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Tipo</label>
                <input type="text" name="name" id="name" required />
              </div>
              <button  type="submit" id="button">
                Anunciar
              </button>
            </div>
            <div className="photos__ad">
              <label className="thumbs main">
                <input type="file" />
                <AiOutlineCamera />
              </label>
              <div className="small">
                <label className={thumbnail ? "thumbs sec has-thumbnail" : "thumbs sec"}
                style={{
                  backgroundImage: `url(${preview})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat : "no-repeat",
                }} id="photo2">
                  <input type="file"
                  onChange={(event) => setThumbnail(event.target.files[0])} />
                  <AiOutlineCamera />
                </label>
                <label className={thumbnail ? "thumbs sec has-thumbnail" : "thumbs sec"}
                style={{
                  backgroundImage: `url(${preview})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat : "no-repeat",
                }} id="photo3">
                  <input type="file"
                  onChange={(event) => setThumbnail(event.target.files[0])} />
                  <AiOutlineCamera />
                </label>
                <label className={thumbnail ? "thumbs sec has-thumbnail" : "thumbs sec"}
                style={{
                  backgroundImage: `url(${preview})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat : "no-repeat",
                }}
                id="photo4">
                  <input type="file"
                  onChange={(event) => setThumbnail(event.target.files[0])} />
                  <AiOutlineCamera />
                </label>
                <label className={thumbnail ? "thumbs sec has-thumbnail" : "thumbs sec"}
                style={{
                  backgroundImage: `url(${preview})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat : "no-repeat",
                }} id="photo5">
                  <input type="file"
                  onChange={(event) => setThumbnail(event.target.files[0])} />
                  <AiOutlineCamera />
                </label>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterAd;
