import React from 'react';
import { useHistory} from 'react-router-dom'
import './style.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer';
import { Form } from '@unform/web'
import Input from '../../components/Form/input'
// import axios from 'axios'
// import DropzinePreview from '../../components/Dropzone'
import ImageInput from '../../components/Form/imputFile';
import api from '../../services/api';
const CriatePost = () => {
    const history = useHistory()
    async function handleSubmit(data){
        // console.log(data.avatar);
        const dados = new FormData();

        dados.append('name',data.name) 
        dados.append('email',data.email) 
        dados.append('avatar',data.avatar) 
        dados.append('description',data.description) 
        // console.log(data);
        // const response = await api.get(`/photos/${id}`)
       const photo = await api.post('/photos', dados)

       if(photo){
       console.log(photo);
       return history.push("/photos")
       }
    }
  return (
      <div id="page-history">
        <Header/>
            <section id="contener-create-post" className=" container contener-create-post">
                <div className="create-post">
                    <Form onSubmit={handleSubmit} action="" method="">
                    <fieldset id="user" className="fild-create">
                            <legend> seus dados </legend>
                            <div  >
                                <div className="camp-form">
                                    <label className="label-input" for="name">name</label>
                                    <Input className="input-block" name="name" id="name" type="text" required/>
                                </div>
                                <div className="camp-form">
                                        <label for="email">email</label> 
                                        <Input className="input-block " id="email" name="email" type="text" required/>
                                </div>
                            </div>
                        </fieldset> 
                            
                        <fieldset id="fild-create-post" className="fild-create-post">
                            <legend>ADD / Photos</legend> 
                            <div className="postagem">
                                <div className="camp-form">
                                    <label for="avatar">photo <span>link (http:// )</span> </label>
                                    {/* <Input className="input-block " name="avatar" type="link" required/> */}
                                 {/* <DropzinePreview></DropzinePreview> */}
                                 <ImageInput className="input-block " name="avatar"></ImageInput>
                                </div>
                                <div className="camp-form">
                                    <label for="description">descricao</label>
                                    <Input classNameName="textarea-block " name="description" />
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit" >enviar</button>
                    </Form>
                    {/* <form action="savephotos" method="POST"> */}
                        
                    {/* </form> */}
                </div>
            </section>
        <Footer/>
      </div>
  );
}
export default CriatePost;