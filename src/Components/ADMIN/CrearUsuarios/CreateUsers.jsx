// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { crateProduct } from '../../../Redux/Action';

// export default function CreateUsers() {
//     const dispatch = useDispatch();

//     const [nameUser, setNameUser] = useState('');
//     const [lastName, setLastname] = useState('');
//     const [identity, setIdentity] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [phone, setPhone] = useState('');
//     const [adress, setAdress] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newUser = {
//             name: nameUser,
//             lastname: lastName,
//             identity: identity,
//             email: email,
//             password: password,
//             phone: phone,
//             adress: adress,
//         };

//         try {
//             const response = await dispatch(crateProduct(newUser));
//             // Aquí puedes manejar la respuesta si es necesario
//             console.log('Usuario creado:', response.data);
//             // Puedes restablecer los estados del formulario después de la creación exitosa
//             setNameUser('');
//             setLastname('');
//             setIdentity('');
//             setEmail('');
//             setPassword('');
//             setPhone('');
//             setAdress('');
//         } catch (error) {
//             // Manejar errores si es necesario
//             console.error('Error al crear el usuario:', error);
//         }
//     };

//     return (
//         <div>
//             <h5>Crear Usuario</h5>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="nameUser" className="form-label">Nombre del Usuario:</label>
//                     <input type="text" className="form-control" id="nameUser" value={nameUser} onChange={(e) => setNameUser(e.target.value)} required />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="lastName" className="form-label">Apellido:</label>
//                     <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastname(e.target.value)} required />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="identity" className="form-label">Identidad:</label>
//                     <input type="text" className="form-control" id="identity" value={identity} onChange={(e) => setIdentity(e.target.value)} required />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Correo Electrónico:</label>
//                     <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Contraseña:</label>
//                     <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="phone" className="form-label">Teléfono:</label>
//                     <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="adress" className="form-label">Dirección:</label>
//                     <input type="text" className="form-control" id="adress" value={adress} onChange={(e) => setAdress(e.target.value)} required />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Crear Usuario</button>
//             </form>
//         </div>
//     );
// }
