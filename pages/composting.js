import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  UncontrolledCarousel
} from "reactstrap";
const items = [
    {
      src: 'p1.jpeg',
     /*  altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header', */
      key: '1'
    },
    {
      src: 'p2.jpeg',
      
     
     
      key: '2'
    },
    {
      src: 'p3.jpeg',
      
   
     
      key: '3'
    },
    {
        src: 'p4.jpeg',
        //altText: 'Slide 1',
        //caption: 'Slide 1',
        //header: 'Slide 1 Header',
        key: '4'
      },
      {
        src: 'p5.jpeg',
        //altText: 'Slide 1',
        //caption: 'Slide 1',
        //header: 'Slide 1 Header',
        key: '5'
      },
      {
        src: 'p6.jpeg',
        //altText: 'Slide 1',
        //caption: 'Slide 1',
        //header: 'Slide 1 Header',
        key: '6'
      },{
        src: 'p7.jpeg',
        //altText: 'Slide 1',
        //caption: 'Slide 1',
        //header: 'Slide 1 Header',
        key: '7'
      },
      {
        src: 'p8.jpeg',
        //altText: 'Slide 1',
        //caption: 'Slide 1',
        //header: 'Slide 1 Header',
        key: '8'
      },
      {
        src: 'p9.jpeg',
        //altText: 'Slide 1',
        //caption: 'Slide 1',
        //header: 'Slide 1 Header',
        key: '9'
      },
  ];
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{}}>
      <Navbar
        color="light"
        light
        expand="md"
        style={{ filter: "drop-shadow(0 0 0.75rem green)", zIndex: 100 }}
      >
        {" "}
        <img
          src={"/logo.jpg"}
          style={{
            height: "80px",
            contain: "content",
            width: "80px",
            marginRight: 10,
          }}
        />
        <NavbarBrand href="/" style={{ fontFamily: "Futura" }}>
          Rotary Compost
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Conozca el compostaje
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Que es ?</DropdownItem>
                <DropdownItem>Beneficios</DropdownItem>
                <DropdownItem>
                  Tecnologia que desarramos para usted
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Contactenos</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Conocenos Ahora!</NavbarText>
          <img
            src={"/whatsapp.png"}
            style={{
              height: "30px",
              contain: "content",
              width: "30px",
              marginRight: 10,
              marginLeft: 10,
            }}
          />
        </Collapse>
      </Navbar>
      <div
        style={{
          width: "100%",
          //height: "5%",
          display: "flex",
          flexDirection: "row",
          padding: 10,
          //alignItems: "stretch",
          position:'relative'
        }}
      >
        <img
          src={"logogreen.jpg"}
          style={{
            width: "50%",
            filter: "brightness(0.3)",
            objectFit: "cover",
            minWidth: "600px",
          }}
        ></img>
        <img src={'logogrey.jpg'} style={{width:'50%',filter: 'brightness(0.3)'}}></img>
          <div style={{position:'absolute',justifyContent:'center',alignItems:'center',width: "100%",
          height: '100%',display:'flex'}}>
          <p style={{ fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:20,marginTop:20,fontWeight:'bold', color:'white',alignSelf:'center',fontSize:'5vw'}}>Rotary, inovación para la autosostenibilidad de tu empresa.</p>
          </div>
        
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:'column'
        }}
      >
        <img
          src={"flag.png"}
          style={{
            width: "400px",
            objectFit: "cover",
            marginTop:100,
            marginBottom:50
          }}
        />
        <p style={{ fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:20,marginTop:20,fontWeight:'bold', color:'green'}}>Beneficios De Compostar</p>

       {/*  <p style={{filter: "drop-shadow(0 0 0.75rem green)", fontFamily:'Futura',color:'rgb(8,133,67)'}}>Beneficios De Compostar</p> */}
        <ul  >
          <li >Reduce la cantidad de materia orgánica que va a los
vertederos.</li>
          <li>El abono obtenido es un nutriente para el suelo que
mejora la estructura y reduce la erosión.</li>
          <li>Reduce el uso de fertilizantes inorgánicos, a los que
sustituye.</li>
<li>Aporta los nutrientes necesarios para el desarrollo de las
plantas de forma natural.</li>
<li>Ahorra agua de riego debido a la capacidad de retención
del agua del compost..</li>
<li>En promedio por cada 100 Kg de residuo orgánico se
obtienen 30 Kg de abono.</li>
        </ul>

        <img
          src={"flag2.png"}
          style={{
            width: "250px",
            objectFit: "cover",
            marginTop:100
          }}
        />

<p style={{ fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:20,marginTop:20}}>Durante el proceso de compostaje suceden una serie de etapas en donde existe una estrecha relación con otros factores, que
permitan obtener un producto final estable el cual pueda ser aplicado al suelo beneficiosamente.
La termperatura representa un factor importante en estas etapas.</p>
<p style={{ fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:20,marginTop:20,fontWeight:'bold', color:'green'}}>Etapas</p>

<img
          src={"flag3.png"}
          style={{
            width: "90%",
            objectFit: "cover",
            
          }}
        />

<p style={{ fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:20,marginTop:20,fontWeight:'bold', color:'green'}}>Factores</p>
<p style={{ fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:20,marginTop:20}}>Humedad, temperatura, pH, oxigeno, relación C/N</p>
<p style={{ filter: "drop-shadow(0 0 0.75rem green)",fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:20,marginTop:20,color:'green'}}>Hemos optimizado este proceso y creado las condiciones adecuadas para acelerarlo, mediante el ROTARY COMPOST. Garantizando la aplicación de tecnologías limpias en el tratamiento responsable de los residuos orgánicos, lo que a su vez se transforma en un producto final estable para el medio ambiente.</p>

<img
          src={"flag4.png"}
          style={{
            width: "250px",
            objectFit: "cover",
            marginBottom:50,
            marginTop:60
          }}
        />

<p style={{ fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:20,marginTop:20,fontWeight:'bold', color:'green'}}>¿Que es Rotary Compost?</p>

        <p style={{ fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:50,marginTop:20}}>Es un compostador rotativo de carga y descarga continua fabricado con una arquitectura robusta, diseño modular y una muy alta calidad en componentes.Se trata de un tambor o estructura tubular rotación a muy baja velocidad que es alimentado a través de dos tolvas; una por donde se ingresa el material orgánico a descomponer y la otra por donde se introduce la fuente de carbono.
</p>
<div style={{width:500}}>
<UncontrolledCarousel color={'red'} items={items} />

</div>
<p style={{ fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:20, marginTop:50}}>
 Cuenta con un sistema de programación digital para el control de la operación, minimizando así el contacto con el producto en descomposición.
El movimiento constante, la temperatura generada y controlada y el oxígeno contenido en el tambor son los principales factores que facilitan y aceleran el proceso de descomposición, reduciendo así la duración del tiempo en el que se obtiene el compost.</p>
<p style={{ fontFamily:'Futura',paddingRight:50,paddingLeft:50,marginBottom:20,marginTop:20,fontWeight:'bold', color:'green'}}>Ventajas Sorprendentes con ROTARY COMPOST</p>
      </div>
    </div>
  );
};

export default Example;
    