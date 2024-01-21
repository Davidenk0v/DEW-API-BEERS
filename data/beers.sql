CREATE TABLE `cervezas` (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key', name VARCHAR(255), type VARCHAR(255), alcohol DOUBLE, description VARCHAR(1024)
);

INSERT INTO
    `cervezas`
VALUES (
        1, 'Alhambra Reserva 1925', 'Lager', 6.4, 'Cerveza lager de gran cuerpo y sabor, con toques de malta y caramelo.'
    ),
    (
        2, 'Estrella Damm', 'Pilsner', 5.4, 'Cerveza pilsner refrescante con un equilibrio entre amargor y suavidad.'
    ),
    (
        3, 'Mahou Cinco Estrellas', 'Pale Lager', 5.5, 'Cerveza pale lager con cuerpo ligero y notas de malta y lúpulo.'
    ),
    (
        4, 'San Miguel Selecta XV', 'Amber Ale', 6.2, 'Cerveza amber ale con carácter maltoso y toques de caramelo y frutas.'
    ),
    (
        5, 'Damm Inedit', 'Witbier', 4.8, 'Cerveza witbier elaborada en colaboración con Ferran Adrià, con notas especiadas y cítricas.'
    ),
    (
        6, 'Moritz Epidor', 'Doppelbock', 7.2, 'Cerveza doppelbock con cuerpo robusto, maltosa y toques de frutos oscuros.'
    ),
    (
        7, 'La Virgen Jamonera', 'Session IPA', 4.7, 'Cerveza session IPA con aromas cítricos y florales, perfecta para disfrutar durante sesiones largas.'
    ),
    (
        8, 'Naparbier Back in Black', 'Black IPA', 6, 'Cerveza black IPA con equilibrio entre maltas oscuras y lúpulos aromáticos.'
    ),
    (
        9, 'Cruzcampo Gran Reserva', 'Vienna Lager', 6.4, 'Cerveza vienna lager con cuerpo medio, maltosa y ligero amargor.'
    ),
    (
        10, 'Heineken España', 'Euro Pale Lager', 5, 'Cerveza euro pale lager con perfil suave y refrescante.'
    ),
    (
        11, 'La Sagra Bohío', 'Weizenbock', 7.5, 'Cerveza weizenbock con notas a plátano y clavo, de cuerpo medio-alto.'
    ),
    (
        12, 'Victoria Malaga', 'Belgian Dubbel', 6.5, 'Cerveza belgian dubbel con aromas a frutas oscuras, caramelo y especias.'
    ),
    (
        13, 'Bidassoa Basque Brewery Akerbeltz', 'Russian Imperial Stout', 9.5, 'Cerveza russian imperial stout con intensos sabores a café, chocolate y regaliz.'
    ),
    (
        14, 'Cervesa Guineu Riner', 'American Pale Ale', 5.2, 'Cerveza american pale ale con lúpulos americanos, notas cítricas y final amargo.'
    ),
    (
        15, 'Dougalls Happy Otter', 'Session IPA', 4.8, 'Cerveza session IPA con aromas frutales y cítricos, ideal para sesiones ligeras.'
    ),
    (
        16, 'La Quince Jack the Ripper', 'American IPA', 7, 'Cerveza american IPA con potentes aromas y sabores a lúpulo.'
    ),
    (
        17, 'Nomada Hop on Top', 'Double IPA', 8, 'Cerveza double IPA con perfil resinoso y cítrico, intensa en amargor.'
    ),
    (
        18, 'La Calavera Cardhu', 'Scotch Ale', 7.5, 'Cerveza scotch ale con maltas tostadas, caramelo y suave dulzura.'
    ),
    (
        19, 'Birra 08 La Bella Lola', 'Blonde Ale', 5.3, 'Cerveza blonde ale con equilibrio entre malta y lúpulo, ligera y refrescante.'
    ),
    (
        20, 'Pirate Brew Koko Black', 'Imperial Porter', 8.5, 'Cerveza imperial porter con aromas a cacao y coco, cuerpo robusto y dulzura.'
    ),
    (
        21, 'Soma Perun', 'Baltic Porter', 7, 'Cerveza baltic porter con notas a chocolate, tostado y suave ahumado.'
    ),
    (
        22, 'Espiga Jumana', 'Gose', 4.8, 'Cerveza gose con toques salinos y cítricos, refrescante y única.'
    ),
    (
        23, 'Ballut Sir James', 'English Barleywine', 11, 'Cerveza english barleywine con cuerpo intenso, notas a caramelo y frutas oscuras.'
    ),
    (
        24, 'As Cervesa Aeri', 'Kölsch', 5, 'Cerveza kölsch de origen gallego, ligera y fácil de beber.'
    ),
    (
        25, 'Galana Irish Red Ale', 'Irish Red Ale', 5.5, 'Cerveza irish red ale con maltas tostadas y ligero amargor.'
    ),
    (
        26, 'Laugar Random Series 61', 'Bière de Garde', 7, 'Cerveza bière de garde con notas a caramelo, especias y frutas maduras.'
    ),
    (
        27, 'Edge Brewing Padrino Porter', 'Robust Porter', 6, 'Cerveza robust porter con sabores a café, chocolate y maltas tostadas.'
    ),
    (
        28, 'Pochs Doble Malta', 'Doppelbock', 8, 'Cerveza doppelbock con cuerpo rico y maltoso, con toques de caramelo.'
    ),
    (
        29, 'La Pirata Lab Imperial Stout', 'Imperial Stout', 10.5, 'Cerveza imperial stout con intensos sabores a café, chocolate y regaliz.'
    ),
    (
        30, 'La Axarca Neula', 'Spiced Beer', 7.5, 'Cerveza spiced beer con toques de especias y vainilla, perfecta para el invierno.'
    ),
    (
        31, 'Garage Beer Soup', 'New England IPA', 6.2, 'Cerveza new england IPA con turbidez y explosión de sabores tropicales.'
    ),
    (
        32, 'Lervig Perler For Svin', 'American Pale Ale', 4.7, 'Cerveza american pale ale con lúpulos americanos, fresca y fácil de beber.'
    ),
    (
        33, 'Nomada Omega', 'Double IPA', 8, 'Cerveza double IPA con intensos aromas y sabores a lúpulo, amargor pronunciado.'
    ),
    (
        34, 'La Pirata Lab Tutti Frutti', 'Fruit Beer', 4.5, 'Cerveza fruit beer con adición de frutas tropicales, refrescante y aromática.'
    ),
    (
        35, 'La Calavera Túrbida', 'Hazy IPA', 6.5, 'Cerveza hazy IPA con turbidez y explosión de aromas a lúpulo y frutas.'
    ),
    (
        36, 'Basqueland Coco Chango', 'Milk Stout', 5.8, 'Cerveza milk stout con añadido de coco, suave y sedosa.'
    ),
    (
        37, 'Bidassoa Basilisk', 'Belgian Strong Ale', 9, 'Cerveza belgian strong ale con cuerpo fuerte, especias y notas a frutas maduras.'
    ),
    (
        38, 'Cyclic Las Tonas', 'Gose', 5.2, 'Cerveza gose con toques salinos y frutas tropicales, refrescante y equilibrada.'
    ),
    (
        39, 'Laugar Aupa Tovarisch!', 'Russian Imperial Stout', 11.5, 'Cerveza russian imperial stout con potentes sabores a café, chocolate y vainilla.'
    ),
    (
        40, 'Llúpol Recuerda', 'IPA', 6.2, 'Cerveza IPA con aromas a lúpulo y frutas tropicales, amargor persistente.'
    );