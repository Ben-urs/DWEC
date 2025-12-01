package com.decroly.product_apirest.services;

import com.decroly.product_apirest.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

public class ProductService {

    private String currency;
    private List<Product> products;

    public ProductService(String currency) {
        this.currency = currency;
        this.products = new ArrayList<>();

         this.products.add(new Product( 
            "0K3QOSOV4V",
            "Camisa Túnica de Popelín de Manga Larga Athletic",
            "Una prenda básica en el armario, esta camisa clásica de manga larga proporciona un aspecto fácil perfecto para cualquier ocasión",
            "mujer",
            "http://peticiones.online/images/products/image07.png",
            "19.95"
        ));

        this.products.add(new Product("0K3QOSOV4V","Chaqueta Cortavientos Plegable Mujer",
"Esta chaqueta impermeable es totalmente plegable y cuenta con un bolsillo frontal tipo canguro, encuadernación en el dobladillo y las mangas, y un cordón elástico ajustable en el dobladillo inferior para mantener fuera los elementos",
                "mujer","http://peticiones.online/images/products/image04.png",
                "27.73"));

        this.products.add(new Product("0K3QOSOV4V","Camisetas Henley de Manga Corta",
                "Esta elegante y cómoda camiseta mantendrá el ritmo de las actividades cotidianas y toda la diversión.",
                "niño","http://peticiones.online/images/products/image09.png",
                "18.99"));

        this.products.add(new Product( "0K3QOSOV4V","Pantalón chino",
                "Un poco de elástico añade comodidad y flexibilidad a estos clásicos pantalones sueltos caqui.",
                "hombre","http://peticiones.online/images/products/image11.png",
                "22.98"));

        this.products.add(new Product( "0K3QOSOV4V","Polo de Rendimiento Activo",
                "Tejido elástico, transpirable, que absorbe la humedad y liviano para actividades deportivas",
                "niño","http://peticiones.online/images/products/image15.png",
                "33.98"));

        this.products.add(new Product( "0K3QOSOV4V","Sudadera Hombre",
                "Esta sudadera con grapas de armario cuenta con una cremallera frontal con bolsillo dividido y puños y dobladillo acanalados con sellado cálido.",
                "hombre","http://peticiones.online/images/products/image05.png",
                "27.5"));

        this.products.add(new Product( "0K3QOSOV4V","Pantalón de Pierna Ancha con cordón de Mezcla de Lino",
                "Este pantalón moderno cuenta con un tejido favorecedor de la figura para un uso diario versátil.",
                "mujer","http://peticiones.online/images/products/image14.png",
                "16.6"));

        this.products.add(new Product( "0K3QOSOV4V","Hombre Camisa de franela a cuadros de manga larga",
                "Mismo corte, nuevo nombre: Hemos cambiado el nombre de este estilo de camisa a «Regular Fit» pero las medidas son las mismas.",
                "hombre","http://peticiones.online/images/products/image08.png",
                "19.4"));

        this.products.add(new Product( "0K3QOSOV4V","Camisetas de Manga Corta Niños, Pack de 5",
                "Tejido de punto ligero, cómodo y suave.",
                "niño","http://peticiones.online/images/products/image10.png",
                "13.9"));

        this.products.add(new Product( "0K3QOSOV4V","Camiseta sin Mangas",
                "Tejido de punto ligero, cómodo y suave.",
                "niño","http://peticiones.online/images/products/image16.png",
                "22.1"));

        this.products.add(new Product( "0K3QOSOV4V","Suéter Ligero con Frente Abierto Mujer",
                "Corte estrecho y cómodo que permite el movimiento.",
                "mujer","http://peticiones.online/images/products/image02.png",
                "18.9"));

        this.products.add(new Product( "0K3QOSOV4V","Hombre Camisetas interiores de cuello a la caja, Pack de 6",
                "Tejido de punto ligero, cómodo y suave. ",
                "hombre","http://peticiones.online/images/products/image01.png",
                "23.99"));

        this.products.add(new Product( "0K3QOSOV4V","Polo de Golf de Secado rápido de Ajuste Regular Hombre",
                "Este producto talla grande, considera elegir una talla inferior a la usual.",
                "hombre","http://peticiones.online/images/products/image03.png",
                "10.25"));

        this.products.add(new Product( "0K3QOSOV4V","Saco de Dormir de Microforro Polar Unisex bebé, Pack de 2",
                "Aprovecha los básicos para bebés con estos monos de algodón 100 % suave con un cuello de vuelta y broches en la entrepierna para un fácil vestido y pañales.",
                "niño","http://peticiones.online/images/products/image06.png",
                "32.99"));

        this.products.add(new Product( "0K3QOSOV4V","Vestido Cruzado con Manga Casquillo",
                "Ajustado en la zona del pecho y la cintura; se ensancha hacia el dobladillo.",
                "mujer","http://peticiones.online/images/products/image12.png",
                "15.99"));

        this.products.add(new Product( "0K3QOSOV4V","Camisa de Manga Larga de Ajuste clásico",
                "Esta camisa clásica y versátil proporciona un aspecto fácil perfecto para cualquier ocasión.",
                "mujer","http://peticiones.online/images/products/image08.png",
                "23.79"));

        this.products.add(new Product( "0K3QOSOV4V","Camisa de Senderismo de Manga Corta",
                "Esta camisa clásica y versátil proporciona un aspecto limpio y abotonado, perfecto para cualquier ocasión.",
                "hombre","http://peticiones.online/images/products/image13.png",
                "20.84"));
    }

    public String getCurrency() {
        return currency;
    }

    public List<Product> getProducts() {
        return products;
    }
}

