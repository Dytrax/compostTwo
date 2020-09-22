import React, { useState } from "react";
import Link from "next/link";
import AwesomeSlider from "react-awesome-slider";
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
  UncontrolledCarousel,
} from "reactstrap";
const items = [
  {
    src: "p1.jpeg",
    /*  altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header', */
    key: "1",
  },
  {
    src: "p2.jpeg",

    key: "2",
  },
  {
    src: "p3.jpeg",

    key: "3",
  },
  {
    src: "p4.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "4",
  },
  {
    src: "p5.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "5",
  },
  {
    src: "p6.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "6",
  },
  {
    src: "p7.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "7",
  },
  {
    src: "p8.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "8",
  },
  {
    src: "p9.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "9",
  },
];

const carouselPrincipal = [
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1",
  },
  {
    src: "p2.jpeg",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "2",
  },
  {
    src: "p3.jpeg",

    key: "3",
  },
  {
    src: "p4.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "4",
  },
  {
    src: "p5.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "5",
  },
  {
    src: "p6.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "6",
  },
  {
    src: "p7.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "7",
  },
  {
    src: "p8.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "8",
  },
  {
    src: "p9.jpeg",
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    //header: 'Slide 1 Header',
    key: "9",
  },
];
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="light"
        light
        expand="md"
        style={{
          filter: "drop-shadow(0 0 0.75rem green)",
          zIndex: 100,
          marginBottom: 50,
        }}
      >
        {" "}
        <img
          src={"/logopng.png"}
          style={{
            height: "80px",
            objectFit: "cover",
            width: "200px",
            marginRight: 10,
          }}
        />
        {/* <NavbarBrand href="/" style={{ fontFamily: "Futura" }}>
          Rotary Compost
        </NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
          <Link href={"https://wa.link/cgrrkz"}>
            <NavbarText>Conocenos Ahora!</NavbarText>
          </Link>
          <Link href={"https://wa.link/cgrrkz"}>
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
          </Link>
        </Collapse>
      </Navbar>
      <AwesomeSlider animation="cubeAnimation">
      {/* <div data-src="logogreen.jpg">
      <p>I want to see what you got.</p>
    </div> */}
    <div data-src="carousel2.png">
      
    </div>
    <div data-src="carousel12.png" >
      
    </div>
    {/* <div data-src="carousel33.png" >
      
    </div> */}
    {/* <div style={{
            display:"inline-block",
            height:"100%",
            width:"100%",
            backgroundImage:"url('carousel11.png')",
            backgroundRepeat:"no-repeat",
            backgroundPosition: "0px 0px",
            backgroundSize:'150% 150%'
            //backgroundColor:'red'
            
        }}>
      
    </div> */}
    <div data-src="p1.jpeg">
     
    </div>
    <div data-src="p5.jpeg">
      
    </div>
    
    {/* <div data-src="/path/to/image.jpg">
      <p>The answer is -- Don't think about it.</p>
    </div>
    <div data-src="/path/to/image.jpg">
      <p>Sometimes science is more art than science.</p>
    </div>
    <div data-src="/path/to/image.jpg">
      <p>Love, connection, experience.</p>
    </div>
        */}
      </AwesomeSlider>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={"flag.png"}
          style={{
            width: "400px",
            objectFit: "cover",
            marginTop: 50,
            marginBottom: 50,
          }}
        />
        <p
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 20,
            fontWeight: "bold",
            color: "green",
          }}
        >
          Beneficios De Compostar
        </p>

        {/*  <p style={{filter: "drop-shadow(0 0 0.75rem green)", fontFamily:'Futura',color:'rgb(8,133,67)'}}>Beneficios De Compostar</p> */}
        <ul
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <li>
            Reduce la cantidad de materia orgánica que va a los vertederos.
          </li>
          <li>
            El abono obtenido es un nutriente para el suelo que mejora la
            estructura y reduce la erosión.
          </li>
          <li>
            Reduce el uso de fertilizantes inorgánicos, a los que sustituye.
          </li>
          <li>
            Aporta los nutrientes necesarios para el desarrollo de las plantas
            de forma natural.
          </li>
          <li>
            Ahorra agua de riego debido a la capacidad de retención del agua del
            compost..
          </li>
          <li>
            En promedio por cada 100 Kg de residuo orgánico se obtienen 30 Kg de
            abono.
          </li>
        </ul>

        <img
          src={"flag2.png"}
          style={{
            width: "250px",
            objectFit: "cover",
            marginTop: 100,
            marginBottom: 50,
          }}
        />

        <p
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          Durante el proceso de compostaje suceden una serie de etapas en donde
          existe una estrecha relación con otros factores, que permitan obtener
          un producto final estable el cual pueda ser aplicado al suelo
          beneficiosamente. La termperatura representa un factor importante en
          estas etapas.
        </p>
        <p
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 20,
            fontWeight: "bold",
            color: "green",
          }}
        >
          Etapas
        </p>

        <img
          src={"flag3.png"}
          style={{
            width: "90%",
            objectFit: "cover",
          }}
        />

        <p
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 20,
            fontWeight: "bold",
            color: "green",
          }}
        >
          Factores
        </p>
        <p
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          Humedad, temperatura, pH, oxigeno, relación C/N
        </p>
        <p
          style={{
            filter: "drop-shadow(0 0 0.75rem green)",
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 20,
            color: "green",
          }}
        >
          Hemos optimizado este proceso y creado las condiciones adecuadas para
          acelerarlo, mediante el ROTARY COMPOST. Garantizando la aplicación de
          tecnologías limpias en el tratamiento responsable de los residuos
          orgánicos, lo que a su vez se transforma en un producto final estable
          para el medio ambiente.
        </p>

        <img
          src={"flag4.png"}
          style={{
            width: "250px",
            objectFit: "cover",
            marginBottom: 50,
            marginTop: 60,
          }}
        />

        <p
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 20,
            fontWeight: "bold",
            color: "green",
          }}
        >
          ¿Que es Rotary Compost?
        </p>

        <p
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 50,
            marginTop: 20,
          }}
        >
          Es un compostador rotativo de carga y descarga continua fabricado con
          una arquitectura robusta, diseño modular y una muy alta calidad en
          componentes.Se trata de un tambor o estructura tubular rotación a muy
          baja velocidad que es alimentado a través de dos tolvas; una por donde
          se ingresa el material orgánico a descomponer y la otra por donde se
          introduce la fuente de carbono.
        </p>
        <div
          style={{
            width: "80%", // width: 150,

            maxWidth: 800,
            height: "",
            //borderRadius: 200 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "red",
            //padding:30
          }}
        >
          <UncontrolledCarousel color={"red"} items={items} />
        </div>
        <p
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 50,
          }}
        >
          Cuenta con un sistema de programación digital para el control de la
          operación, minimizando así el contacto con el producto en
          descomposición. El movimiento constante, la temperatura generada y
          controlada y el oxígeno contenido en el tambor son los principales
          factores que facilitan y aceleran el proceso de descomposición,
          reduciendo así la duración del tiempo en el que se obtiene el compost.
        </p>
        <p
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 20,
            fontWeight: "bold",
            color: "green",
          }}
        >
          Ventajas Sorprendentes con ROTARY COMPOST
        </p>

        <ul
          style={{
            fontFamily: "Futura",
            paddingRight: 50,
            paddingLeft: 50,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <li>
            Simple de Operar y Mantener, CÁRGALO, CIÉRRALO Y DESPREOCÚPATE.
          </li>
          <li>Operación de bajo costo, mínima energía eléctrica requerida.</li>
          <li>
            Más rápidos y más eficientes en la descomposición del material.
          </li>
          <li>
            Seguridad e higiene al procesar la mortalidad y demás residuos
            orgánicos.
          </li>
          <li>
            Contribuye con la reducción de residuos enviados a disposición
            final.
          </li>
          <li>Elimina la contaminación del suelo, agua y aire.</li>
        </ul>
      </div>
    </div>
  );
};

export default Example;
