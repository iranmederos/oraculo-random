const oraculo = [
    {
        num: "I",

        titulo: "El Guerrero Nace",

        texto: `La nieve se ha derretido El bosque respira nuevamente. 
        El Sol se refleja en el estanque... Una vez más.`
    },

    {
        num: "II",

        titulo: "El Guerrero despierta",

        texto: `En el horizonte, el límite entre el Cielo y la Tierra se desdibuja. En el horizonte, es imposible discernir.
        Antes de mirar la puesta de Sol, me siento en una firme roca.
        Has estado viviendo en lo irreal. Tu existencia se ha desarrollado sobre lo inexistente. Careces de base. Estás en el aire. Todo este tiempo has vivido pensado que las cosas eran de una manera. Has actuado en concordancia a ello y está bien. Pero en el Camino del conocimiento, el Guerrero debe penetrar más y más profundamente en sí mismo y su vida. En el Camino del conocimiento, el Guerrero debe morir para luego renacer fulgurante.
        En este tiempo de despertar. Bruscamente has tomado conciencia de lo frágiles que eran tus creencias. Lo que antes eran tus pilares son ahora solo vestigios. El altísimo te ha jugado la vieja broma de sacarte la silla cuando ibas a sentarte como todos los días. Te has golpeado, has sentido dolor y esto también está bien. Si hubieses caído sobre algo mullido, no le hubieras dado mayor importancia. Pero la verdad es que aterrizaste a otra realidad. Estás desconcertado. Tu conciencia obnubilada. No entiendes nada de lo que pasó. Sientes que has perdido el tiempo hasta ahora y hasta sentirás vergüenza por lo que antes hiciste. Restrospectivamente, te verás como alguien dedicado a cosas fútiles.
        El dolor ciega. Aunque no lo entiendas ahora, lo que te ha ocurrido es algo maravilloso. Ya no eres el mismo de hace unos momentos atrás y, si eres lo suficientemente sabio, nunca volverás a serlo. Otras cosas importarán ahora, otras montañas habras de subir. Otros Demonios enfrentarás, otros hermanos caminarán contigo. Vive tu nueva vida, mira con tus nuevos ojos. Sin embargo, prepárate a renacer. Nuevamente. Sólo así podrás llegar al final del camino.`
    },

    {
        num: "III",

        titulo: "El Guerrero emprende el viaje",

        texto: `Has estado demasiado tiempo en este lugar. El aire está enrarecido. Estás estancado, no fluyes. Tu entorno ya no te aporta nada nuevo. Debes, pues, marcharte en busca de nuevos amaneceres. Deja lo superfluo, lleva contigo sólo lo esencial. Tu corazón, tu espíritu y tu cuerpo son suficientes.
        Ordena las cosas antes de irte. Cierra los círculos. No dejes cabos sueltos. Que tu partida sea natural, como el migrar de las grullas en invierno. No escapes. Simplemente abandona este lugar, esta situación. Vete. De seguro encontrarás nuevos compañeros de viaje.
        Tal vez algún día regreses.`
    },

    {
        num: "IV",

        titulo: "El Guerrero muestra el interior",

        texto: `La hoja del sable es cortante y fría. La empuñadura es redonda y tibia. Sólo así puedo combatir.
        ¿Por qué llevas armaduras? ¿Por qué tanto temor? Nada serio puede pasarte ahora. Abre tu corazón al Sol y a la vida para que el mundo se refleje en ti. Si estás amargado, ábrete. La luz llegará suave. Si estás feliz, ábrete. La luz brotará suave.
        Muestra el interior. Desecha lo superficial y libérate. Vive con la verdad. Si alguien merece gelidez, que la reciba. 
        Si alguien merece calor, eso debe recibir. Acariciar cuando hay que acariciar. Golpear cuando hay que golpear. 
        Que nadie tenga dudas acerca de lo que tú eres, piensas o sientes. Aunque duela, vive con la Verdad. 
        Ese es el camino del Guerrero. Ese es el único camino.`
    },

    {
        num: "V",

        titulo: "El Guerrero busca al hermano",

        texto: `El camino te llevará toda la vida. ¿Por qué hacerlo sólo? Es bueno recorrerlo acompañado. Busca entonces al hermano del Camino. Con él podrás recorrer la senda de igual a igual. Cuando él esté cansado, tú deberás seguir remando. Cuando tú duermes, él vigilará. Cuando uno tropiece, el otro estara allí para ayudarle. Cuando uno esté enfermo, el otro acudirá en su ayuda.
        Poco a poco los lazos se fortalecerán, y vuestros corazones se alegrarán al abrazarse de Guerrero a Guerrero luego de cada batalla. Compartirán lo sagrado y lo profano por igual. Compañeros de plegarias y de borracheras seréis. Cada uno con su vida, sus amores y penurias, sumergido de lelno en la vida. Pero en medio de la vorágine, recordarás a tu amigo y el corazón se sentirá reconfortado. Año tras año recorrerán juntos la Senda Sagrada del Guerrero. Espalda con espalda, cien combates serán cien victorias.
        Y un día lejano, al final de vuestras vidas, os sentareis uno al lado del otro, a contemplar el sol ponerse en el silencioso desierto.`
    },

    {
        num: "VI",

        titulo: "El Guerrero reúne los ejércitos",

        texto: `Una gran tarea te aguarda. No serás capaz de realizarla a menos que reconcentres tus energías y te dispongas seriamente al combate. Unifica tu corazón, tu espíritu y tu cuerpo. Alinéalos. Céntrate. Inspira. Enfoca todo tu ser a la prueba que se avecina. No andes por ahí despilfarrando fuerzas. No Se las entregues al lado oscuro. No por ahora, al menos. Si lo haces, el Demonio te aplastará como a un sapo. Tu vida depende de lo que vas a hacer. Deja de sonreír pues no es un juego. Puedes morir en el intento.
        Reorganiza, acumula, enfoca y lánzate al vacío.
        Sólo así podrás mantenerte entero.`
    },

    {
        num: "VII",

        titulo: "El Guerrero reúne los ejércitos",

        texto: `Durante largo tiempo has sido esclavo de tu debilidad. Hay una tarea delante de ti. Sabes que debes hacerlo, pero lo has estado postergando. Ya sea porque será doloroso, o porque te sientes incapaz de hacerlo. Pero no puedes dejar de oír tu voz interior. En algún momento deberás tomar las riendas del carruaje. Así es que asume tu condición de Guerrero y cumple con tu deber ahora. Es un acto ciego, sin arrepentimiento posible una vez iniciado. No prestes atención ni a tu comodidad, ni a tu pereza ni a tu indulgencia. Menos aún a los ignorantes de piel mustia y mirada opaca. Blande el hacha y corta las cadenas. Sólo entonces serás liberado.`
    },

    {
        num: "VIII",

        titulo: "El Guerrero parte en busca del Demonio",

        texto: `Ya no es posible seguir viviendo así. El Demonio te ha acosado demasiado tiempo. Le has dado demasiada ventaja. Estás jugando su juego, te tiene a su merced. Si quieres ser libre, debes invertir los papeles. Reúne tus ejércitos antes de emprender el viaje. Búscalo dentro de ti, atrévete a mirar en tu interior. En la jornada encontrarás alimañas y carne putrefacta. Pero encontrarás Princesas y Maestros también. Ellos te ayudarán en el Combate. Ello no significa que lucharán por ti, pero tal vez puedan secar el sudor de tu frente, la sangre de tus heridas. Persigue al Demonio, acósalo, enfréntalo. Desciende hasta el fondo del infierno a buscarlo. Verás que se esconde y rehuye tu presencia. Cuando eso ocurra no pienses, sin embargo, que has triunfado. Que en ese momento la cobardía no se apodere de ti y te haga cejar en la búsqueda. Si no lo ves cuando lo buscas, escarba en los rincones no explorados aún. Persíguelo día y noche. Aprende a reconocer sus huellas, sus olores, sus marcas. Y cuando lo encuentres, pártelo en dos de un sólo sablazo. Sin ira, pero con la fuerza del trueno. Obsérvalo cuidadosamente. Cerciórate de que está muerto. Luego regresa a la superficie.
        Serás victorioso, consérvate humilde. Siéntate, respira.
        Y luego sigue tu camino.`
    },

    {
        num: "IX",

        titulo: "El Guerrero se agazapa",

        texto: `Debes medir con cuidado los próximos pasos a dar. El camino te conduce hacia un sitio peligroso. A fin de salir inmune, debes poder observar sin ser visto. Agazápate, fúndete con el suelo, y mantén los ojos bien abiertos. Flecta tus patas traseras, reúne los ejércitos contrae tu cuerpo y luego libéralo de un brinco. Salta sobre él. Sin notarlo, estará perdido.`
    },

    {
        num: "X",

        titulo: "El Guerrero vigila",

        texto: ` Un verdadero Guerrero está siempre vigilante, siempre alerta, al acecho. Debes mantener tus ojos bien abiertos para poder mirar a tu interior. Vigila que tu corazón esté siempre limpio, libre y liviano. Observa el rumbo que está tomando tu vida en este momento. ¿Vas a dónde quieres? ¿O simplemente eres arrastrado? ¿Cuánto de ti has entregado? ¿Cuánto has transado? ¿En qué cosas impórtantes has claudicado? ¿Qué sentido tiene lo que estás viviendo ahora? ¿De qué manera se relacionan con el pasado? ¿Cuáles serán las consecuencias en el futuro? ¿Sigues manteniendo la dignidad de todo Guerrero? ¿Es tu corazón aún
        tierno y bondadoso? ¿Es tu espíritu tan gélido como para saltar al vacío?
        Un parpadeo basta. Y estarás a miles de millas de tu hogar. ¿Eres feliz?
        Un Guerrero siempre se mantiene vigilante. Un Guerrero siempre mantiene los ojos abiertos.`
    },

    {
        num: "XI",

        titulo: "El Guerrero enseña su lanza",

        texto: `Párate dignamente sobre la Tierra. De perfil. Tu mano sostiene la lanza. Su punta se dirige hacia el Cielo. Demuestra que estás dispuesto a batirte hasta la muerte. Marca un territorio, hazte Señor de él. Emana poder silente. Toda la furia está despierta pero agazapada, lista para saltar. Que tu adversario vea que el Universo entero está plantado ante él. Gruñe si es necesario. Aúlla como el lobo de las montañas. Erízale la piel a tu enemigo. Intimídalo con la mirada fulgurante. El combate será evitado. La vida será preservada. Retírate humildemente aunque hayas triunfado.
        Esa es la vía del Guerrero.`
    },

    {
        num: "XII",

        titulo: "El Guerrero impide el paso",

        texto: `Ya es suficiente. Has esperado por un  tiempo prolongado. Te has abstenido de actuar esperando que las cosas retomaran su curso natural. Pero no lo han hecho. Así es que debes actuar. Esa persona ha avanzado más allá de lo debido. Ha pasado por encima de todos, ha pisoteado todas las dignidades que se le han atravesado por delante. Muchas lágrimas y frustraciones ha dejado tras de si y no siente arrepentimiento alguno.
        Tú debes poner atajo a esta situación, dado que eres el más fuerte ahora. Así es que enfréntala e impídele el paso. Si no lo haces, personas inocentes seguirán sufriendo el despotismo irrefrenable de este ciego enviado. Si tus manos no bastan, usa tu escudo. Si tu escudo no es suficiente, usa tu lanza amenazante. Si con eso no lo logras, desenvaina tu sable y pártela en dos. Arriésgate a perderlo todo en este combate. Si así lo haces, siempre resultarás victorioso. Pase lo que pase, siempre resultarás victorioso.`
    },

    {
        num: "XIII",

        titulo: "El Guerrero se lanza al vacío",

        texto: `Salta al precipicio. Arriésgalo todo y lánzate. Aunque todo en el exterior parezca indicar que morirás, inténtalo. La mano del Altísimo te recogerá en el último momento. Pasarás hambre y frío. Sentirás el horror apoderarse de tu piel durante la caída. Pero no dudes. Si lo haces, morirás. Confía en que nada te pasará.
        Y aterrizarás suavemente.`
    },

    {
        num: "XIV",

        titulo: "El Guerrero combate",

        texto: `Los primeros rayos del sol llegan a la playa. Los ejércitos se han ordenado y todo está listo. La batalla se desencadenará de un momento a otro. No existe alternativa. Debes combatir.
        Al hacerlo, pon todo tu espíritu corazón y cuerpo en ello. Lucha centrado, unificado, alineado Lucha incansablemente, día y noche si es preciso. Mantente vigilante a las cuatro direcciones. Confia en el animal que vive en ti. La batalla tendrá sus valles y sus cimas, sensibilízate y adáptate a ello.
    
        Una vez avanzar y otra retroceder. Una vez atacar y otra defender. Disgrega a tu adversario, atácalo mientras inspire. Avasállalo, no le des tiempo de reordenar sus ejércitos. Cambia permanentemente tus estrategias. Ataca a lo alto y luego a lo bajo y después al medio. Varia el ritmo de tus ataques. Una vez rápido y otra vez lento. Una vez lento y otras vez inmóvil.
    
        Sé un continuo cambio de un animal a otro, de un elemento a otro. Agua contra roca. Fuego contra metal. Madera contra tierra. De esa manera, jamás podrás ser encasillado en patrón alguno y por lo tanto, serás imbatible. Sigue a tu espontaneidad y mantente en estado gaseoso. Que tu adversario no sea capaz de tocarte, pero que sienta el poder de tus golpes. Usa tus manos, tus pies. Tus codos y tus rodillas. Esquiva, luego contraataca. Adelántate a sus movimientos y neutralízalos antes de que comiéncen a gestarse. Déjalo pasar y luego cae sobre él. inutiliza sus armas. Acorta la distancia, ataca y luego sal de su radio de acción.
    
        Lucha con todos los bríos de tu juventud.
    
        Pero más importante que todo lo anterior es combatir sin ira. Si el salvajismo y la crueldad se apoderan de ti, no importa lo que hagas, estarás perdido. Te convertirás en aquello que combates, y el lado oscuro tendrá un nuevo adepto entre sus filas.
    
        Así es que empuña tu sable y entra en batalla. Luego de vencer, retírate en silencio. Nada hay por lo que alegrarse. Nada hay que festejar. La muerte siempre trae lágrimas aparejadas. Lágrimas por el que algún día fue tu hermano y debió morir a manos tuyas porque el destino así lo quiso. No porque tú lo quisiste. Nunca olvides eso.`
    },

    {
        num: "XV",

        titulo: "El Guerrero sufre",

        texto: `La Vida te ha puesto en un callejón sin salida alguna. No tienes adónde escapar. Sólo te queda entonces sufrir. No pretendas rehuirlo. Al contrario. Busca tu dolor. Siéntelo. Masticalo, disuélvelo en tu saliva y trágalo, asimílalo, hazlo parte de ti. Siente las paredes de tu corazón desprenderse. Siente los músculos desgarrarse de tus huesos. Vive la desintegración de tu ser por el dolor. Siéntete un desecho. Un par de sandalias viejas arrojadas a la vera del camino por un caminante cansado. Una botella de alcohol arrojada a la basura por un borracho sin destino. Algo insignificante, como lo que realmente somos. Llora, blasfema a tu Dios y quema sus imágenes si es necesario. Escucha el silencio de tu soledad. Estás sólo en el mundo. Nadie podrá hacer nada por ti. Estás perdido y desvalido. Deshecho. Una vez más, desintegrado en la adversidad. Llega al fondo de tu tormento. Muere en cada célula de tu cuerpo.
        Pero durante tu calvario, sólo una cosa: una fina hebra roja que recorra tu columna de principio a fin. Que algo, un mínimo de conciencia y dignidad quede encerrada en ese espacio.
    
        Y cuando hayas tocado fondo, tu cuerpo liviano subirá a la superficie y podrás tomar aire nuevamente. Verás que los engendros crispados que viste en el camino al abismo ya no existen en tu regreso a la luz. No desesperes. Tardarás algo de tiempo en volver. Lo importante es que llegarás. Pase lo que pase, encierra en tu columna la fe en ello. Llegarás.`
    },

    {
        num: "XVI",

        titulo: "El Guerrero vence",

        texto: `Está dicho. Si combates en armonía con el Universo, no puedes sino vencer. Si combates porque es la única manera de recuperar el equilibrio perdido, no puedes sino vencer. Si combates porque has agotado todas las otras alternativas, no puedes sino vencer.

        ¿Pero qué significa vencer? Ganar la batalla con sólo hacer sentir a tu adversario el poder del que eres continente, el poderío del Universo. Hacer comprender a tu oponente que no tiene caso el derramar sangre sobre esta bella Tierra. Es hacer de tu enemigo un amigo. Es contribuir a la paz en el mundo. Es cumplir con la voluntad del Altísimo. Es vivir.`
    },

    {
        num: "XVII",

        titulo: "El Guerrero se retira",

        texto: `Todo está indicando que debes retirarte. Si continúas donde estás, lágrimas serán vertidas inútilmente. No estés. Retrocede, desaparece dignamente. No huyas. Retírate en silencio, sin que nadie lo note. Deslízate suavemente. No es éste tu lugar. No perseveres obcecadamente en tu objetivo. Si todo se ha mostrado adverso y, lo que es peor, dudas, es que no es éste el momento ni el sitio oportuno. Vete sin dejar rastro alguno, y no habrá heridas que cicatrizar.`
    },

    {
        num: "XVIII",

        titulo: "El Guerrero esconde el interior",

        texto: `Tu ser está muy débil y el combate se pone más y más difícil. Cierra pues las puertas, guarda tu interior. La vida es preciosa y no merece ser perdida a manos de demonios indignos de tomarla. Retirate, reúne los ejércitos y sólo entonces parte en busca de las sombras.

        No antes.

        Nunca antes.`
    },

    {
        num: "XIX",

        titulo: "El Guerrero se dedica por completo",

        texto: `Sólo hay una forma de hacerlo: dedicándote por completo. Haz un corte transversal en tu vida y examínala. Hay dos tipos de cosas: las útiles y las inútiles. Abandona todo lo superfluo y quédate con lo importante. Examina lo importante. Elige ahora lo realmente importante. Será evidente que debes dedicarte a una tarea en particulár. Para ello, reúne tus ejércitos, respira hondo y salta. Concéntrate en tu objetivo y nunca lo pierdas de vista. Sumérgete en lo que tienes que hacer y dedícate con disciplina guerrera a ello. Trabaja día y noche, con tesón y voluntad inquebrantable. Descansa lo necesario, reposa unos instantes y sigue adelante. No descuides, sin embargo, tu vida. Debes dormir bien y comer sanamente para seguir adelante.

        Cuando hablo de una tarea no me refiero sólo al trabajo. Tu tarea puede ser forjar tu cuerpo. Ayudar a un amigo. No importa. Lo importante es que te dediques con todo tu ser. Cuando hayas terminado puedes ir a un bosque tiéndete de espaldas y reposa.
      
        ¡De seguro te quedarás dormido!`
    },

    {
        num: "XX",

        titulo: "El Guerrero ama",

        texto: `Es tiempo de amar. Comparte la alegría de la Vida con los que te rodean. Acaricia el lomo arqueado de tu gato. Abraza a tus amigos, a tu hermano. Besa a tus padres, que te regalaron con la vida. Haz el amor a tu mujer. Siente tu corazón desnudo, embriagado por el gozo de la libertad que da el Amor. Siéntelo palpitante, sensible a la vida. Libera los nudos.

        Que tu corazón escuche el susurro del Universo girando lentamente. Abre tus canales de percepción y conéctate con el Altísimo. Junta tus palmas e inclínate.`
    },

    {
        num: "XXI",

        titulo: "El Guerrero pierde la Senda",

        texto: `En la espesura del bosque, mi mano se extiende temblorosa.
        Una rana me observa.
    
        ¿Dónde estás? Ni tú mismo lo sabes. Venías bastante bien. Pero algo ocurrió en el camino y ahora estás extraviado. O te faltó fuerza o te faltó sabiduría. Y ahora estás extraviado. ¿Volverás? Antes de retornar al origen debes preguntarte por qué es necesario hacerlo. Tal vez es allí donde querías llegar y no te habías percatado de ello. O tal vez te convenga más seguir avanzando y dejar tu hogar atrás.
    
        Pero si deseas retomar la senda, debes desandar tus pasos.
    
        Piensa bien. ¿Adónde querías llegar?
    
        ¿Qué montaña estabas subiendo? Tú lo tienes claro, o al menos alguna vez lo tuviste. Recuerda ese momento de luz y reemprende el camino. Probablemente, debas retornar al origen antes de seguir. No te pierdas de nuevo.
    
        Puedes no encontrar siquiera una amiga de ojos grandes.`
    },

    {
        num: "XXII",

        titulo: "El Guerrero disfruta del vino y las mujeres",

        texto: `Una vez retener y otra vez soltar. Una vez contener y otra vez liberar. Ahora es el tiempo de desbocarse, de derrochar los placeres, no de escatimarlos.
        Bebe el vino y emborráchate en compañía de tu hermano del camino. Siente el vértigo de la noche que te llama a extraviarte en ella y sus mil oscuras caras. Recorre las calles y vuelve a tu alcoba noche tras noche. Disfruta con la compañía de tu bella y voluptuosa mujer. Vive cada orgasmo como si fuera el último, disfruta tus encuentros con cada centímetro de piel. Embriágate del perfume que emana de tu compañera y enróllate en su cabellera. Goza de tu desnudez y del sol bañando tu sexo.
    
        Prueba cada manjar que se presente ante tu boca y saboréalo pues es único en el mundo. Llega al límite en que la fuerza centrífuga tienda a lanzarte despedido de esta realidad.
    
        Pero durante tu enajenación, sólo una cosa: una fina hebra roja que recorra tu columna de principio a fin. Que algo, un mínimo de conciencia y dignidad quede encerrada en ese espacio. Eso significará para ti el puente entre la muerte y el control del carruaje cuando hayas llegado al borde del precipicio. Una vez retener y otra vez soltar. Una vez contener y otra vez liberar. Luego deberá venir el tiempo de sentarse y reorganizar los ejércitos. Sólo así podrás seguir en la senda.`
    },

    {
        num: "XXIII",

        titulo: "El Guerrero es derrotado",

        texto: `Una vez arriba y otra vez abajo. Una vez adelante y otra vez atrás. Es este un momento de derrota para ti. Has perdido una batalla en el Camino del Conocimiento. Has perdido un combate. Asúmelo, hazte cargo de tu derrota. Nadie más que tú es el responsable de la misma. A nadie puedes culpar por ello. O te faltó sabiduría o te faltó valentía. La cosa es que no hiciste lo que debías hacer en el momento justo.
        Debes aceptar con humildad tu equivocación. Si heriste, pide perdón. Sí destruiste, construye. Si separaste, une. Lo importante es que no cometas de nuevo el mismo error. Sólo así podrá el Sol brillar para ti. Ahora bien, además de hacer cuanto esté a tu alcance por reparar lo dañado debes estar preparado para enfrentar las consecuencias que de tu accionar devengan.
    
        Reflexionar, corregir, esperar. Luego actuar.
    
        El cielo se refleja en el mar y sólo entonces mira hacia la Luna.`
    },

    {
        num: "XXIV",

        titulo: "El Guerrero mira al horizonte",

        texto: `Deja lo que estás haciendo. Siéntate. Reposa. Endereza tu columna. Relaja tus ojos. Mira al horizonte, sin enfocar nada en particular. Barre el infinito con la mirada apacible. Eres parte del Universo, hijo del Cielo, de la Tierra y del tiempo. Hermano del Sol y de la Luna. Tu vida tiene que ver con todo lo que ves. Eres parte de ello. Tienes todo para ser feliz así es que no busques nada más allá de ti.
        Agradece al Altísimo todo lo que has vivido, todo lo que eres. Conéctate con tu corazón, siente tus latidos. Respira, escucha. Elévate y respira nuevamente.
    
        Tu sonrisa iluminará el camino...`
    },

    {
        num: "XXV",

        titulo: "El Guerrero se sienta",

        texto: `Es momento de dejar de actuar. Sal de la vorágine de la vida y haz un espacio para meditar. Mantente inmóvil, aquieta tu espíritu. Busca la soledad. Sólo así podrás ver con claridad. Ha habido mucho movimiento hasta ahora. Los caballos están desbocados, el remolino ha girado incesantemente. Yergue tu columna, concéntrate en el bajo vientre, relaja tu cuerpo, observa tu respiración. expándete. Cierra los ojos y haz el silencio: Conéctate con la Tierra, sintiendo el cordón umbilical que los une. Cobíjate en el vientre de tu Madre. Reposa, descansa, medita. Luego ve y actúa si es preciso.`
    },

    {
        num: "XXVI",

        titulo: "El Guerrero retoma la senda",

        texto: `Estás perdido. Has decido regresar a tu camino original. ¿Qué hacer? Primero que nada, no debes desesperar. No has desaparecido del espacio. Simplemente no estás donde querrías, eso es todo. Mirado así es menos angustiante.
        Oriéntate. ¿Por dónde sale el Sol? ¿Por dónde se esconde? Ya tienes algo claro, tu Norte al menos. Mira al Cielo. ¿Dónde se haya el Arquero Celeste? ¿Dónde la Cruz del Sur?
        Reconstruye mentalmente el camino andado. ¿En qué punto exacto dejaste tu camino original? No estás solo. Hay hermanos contigo. Recurre a ellos por ayuda, que de seguro responderán.
        
        Si es de noche, te aconsejo no moverte. No sabes qué encontrarás en el boque. Tal vez hallarás Guardianes, pero es seguro que bruijas saldrán a tu paso también. Espera a que el Sol salga y camina de día. Raciona tus alimentos, el agua, tu aliento y tus latidos. Puedes demorarte algún tiempo en regresar. Si es invierno y está todo nevado debes ser más cuidadoso todavía. El paisaje es más homogéneo, el camino más difícil de reconocer. Cuidate del frío, abriga especialmente tus pies. Si has llegado demasiado lejos, tendrás que esperar los deshielos primaverales para regresar. Mientras tanto, esfuérzate en dejar señales que otros hermanos puedan reconocer. Si quieres ayuda, si quieres ser visto debes hacerlo notar. Si estás verdaderamente perdido, encerrarte en nada ayudará.
        
        Pero por sobre todo no te rindas no te dejes estar, no te sientes. Si lo haces, el manto gélido de la muerte te hará suyo.
        
        Si realmente quieres regresar, busca un río. Tarde o temprano, llegarás a las arenas tibias del mar.`
    },

    {
        num: "XXVII",

        titulo: "El Guerrero retorna al origen",

        texto: `Has llegado demasiado lejos. Has perdido tus raíces. No recuerdas ni a tu padre, ni a tu madre ni a tu tierra. Estos territorios son demasiados extraños para ti. Peligrosos tal vez. Eres un forastero. Ya no eres el que eras, ni siquiera el que siempre quisiste ser. ¿Qué caso tiene quedarse? Tampoco perseveres en esta dirección. El viento frenará cada vez más tu marcha. No sigas avanzando. Si continúas haciéndolo, quizás ya nunca puedas volver a casa. Extraviarás el camino para siempre, y vagaras errante por los mundos.

        Entonces vuelve a tu origen, a tu raíz. Remonta los ríos recorridos y refúgiate en la matriz. Volverás a sentirte protegido como un niño. Volverás a ser lo que eras antes de extraviarte. Sentirás el calor del vientre de tu madre, la tibieza del fuego de tu madriguera. Nadie podrá hacerte daño allí. Estás a salvo. Deberás reponerte antes de iniciar un nuevo viaje. Estás muy débil ahora, aunque no puedas notarlo. Ten paciencia, renueva tus energías. Te sentirás seguro, listo para emprender el viaje nuevamente. Antes de hacerlo, besa á tu madre, a tu padre y a tu tierra.`
    },

    {
        num: "XXVIII",

        titulo: "El Guerrero reafirma los lazos",

        texto: `Cortar cadenas y reafirmar lazos. Eso es.
        Liberarse de lo inútil y echar raíces para crecer. Eso es.
    
        En tu vida, te has ido alejando poco a poco de lo importante. De lo que para ti es importante. Y eso no es bueno. Que nunca estés tan ocupado como para que ello ocurra. De ser así, vagarás errante por mundos desconocidos.
    
        Visita a tus bienamados padres. Están viejitos y necesitan de ti. Abrázalos, bésalos, exprésales todo el amor que les tienes. Que no les quede ninguna duda de que son los más importante para ti. Puedes volver a tu lugar de nacimiento, a tu casa de infancia. Buscar aquellos con los que jugaste. Pedirle a tu madre que te prepare ese postre que comías con avidez cuando tenias siete años. O buscar a tus antepasados Guerreros. Visitar su tumba, llevarles algo tuyo en ofrenda. Releer sus escritos, encenderles una vara de incienso o sentarte a meditar junto a ellos.
    
        Desanda tus pasos y vuelve a la raíz, Honra a tu bienamado Maestro. Busca también al hermano. Abrázalo como años atrás, luego de una gran batalla.
    
        Vuelve a casa con tu cuerpo y tu espíritu. Espera a tu compañera, que pronto llegará con los brazos siempre dispuestos a estrecharte. Tal vez tiernamente, mirarla a los ojos como cuando caminaban juntos por primera vez.
    
        Desanda tus pasos y vuelve a la raíz. Vuelve a ti mismo. Vuelve a tu vida. Es tiempo ya.`
    },

    {
        num: "XXIX",

        titulo: "El Guerrero honra al Maestro",

        texto: `El Maestro ha estado esperando largo tiempo por ti. Te has ido de su lado y lo has abandonado. Discípulo insensato. ¿Has olvidado las nobles antiguas tradiciones? El Maestro debe ser siempre respetado, honrado. Así es que desanda tus pasos y vuelve a tu raíz. Tu Maestro ha hecho de ti un Guerrero poderoso. Te ha acogido como a un hijo cuando te has ido de su lado. Ha curado tus heridas. Ha escuchado pacientemente tus interminables preguntas y siempre ha tenido tiempo para ti. Desanda tus pasos y vuelve a la raíz. Honra a tu bienamado Maestro.`
    },

    {
        num: "XXX",

        titulo: "El Guerrero abre el Camino",

        texto: `Está en tus manos la decisión. Puedes dejar pasar o retener. Abrir el Camino o cerrarlo. Estás dudoso, pues no sabes qué consecuencias traerá. Sin embargo, lo que ahora corresponde es abrir el camino a tu discípulo. Ayúdalo a seguir, despéjale la senda de obstáculos. Está en las estrellas que debe alcanzar la cima de esa montaña. Pero no es ni lo suficientemente fuerte ni lo suficientemente sabio como para reordenar los Ejércitos y tensar su arco. Así es que lucha al frente de él protegiéndolo, hasta que la batalla esté ganada. Entonces, al amanecer, cuando tu discípulo repose, retírate en silencio sin dejar rastro de ti.`
    },

    {
        num: "XXXI",

        titulo: "El Guerrero protege",

        texto: `Alguien necesita ayuda. Está ante un peligro y no sabe cómo enfrentarlo. Tal vez ni siquiera sabe el riesgo que corre. Es tu deber tomar parte en el combate. No puedes desentenderte. El no será capaz de hacerlo por sí mismo. Es muy joven, muy débil para hacerlo. Así es que es tu deber ayudarlo. No recibirás nada a cambio y arriesgarás mucho. Pero hazlo de todos modos. Y no te sientas demasiado bueno por ello. Simplemente estás cumpliendo con tu deber. Actúa. Protege. En silencio.`
    },

    {
        num: "XXXII",

        titulo: "El Guerrero enseña",

        texto: `Alguien ha estado esperando por ti. Un joven aprendiz ha elevado sus plegarías para que tu camino y el de él se crucen. Cuando lo encuentres, detente. No cometas el error de rehuir tu responsabilidad. Deberás renunciar a ti  mismo en lo exterior y dedicarle el tiempo a tu discípulo. Entrégate por entero a él. Ten paciencia con sus errores. Enséñale en silencio, ayúdalo a aquietar su espíritu, a empuñar su espada y cortar las cadenas. Te molestará con mil y una preguntas inútiles e insensatas. Dudará de ti, y hasta es posible que te abandone. Pero debes estar siempre allí, con los brazos abiertos para acogerlo como a tu propio hijo criarlo, y  comprenda y vuelva.
        Tú lo serás todo para él. Sus ojos te observarán ávidos de conocimiento. Estudiará tu forma de caminar y la imitará. Copiará tu forma de coger el tenedor pues pensará insensatamente que eso le conducirá a la iluminación. Pero no importa. En algún momento comprenderá.
    
        Cuando ese momento llegue, habrán establecido una de las relaciones más hermosas de esta Tierra. Serán Maestro y discípulo. Serán uno solo.`
    },

    {
        num: "XXXIII",

        titulo: "El Guerrero se entrega al Altísimo",

        texto: `Nada puedes hacer ya. Comprende que eres sólo un hombre, Guerrero, pero hombre al fin. Has hecho todo lo posible. Has sufrido lo necesario, y más aún. Te has esforzado lo necesario. Y más aún. Pero ya no depende de ti. Ni retroceder, ni avanzar. Ni actuar ni dejar de hacerlo. Suspenderse en el aire. Dejarlo todo en manos del Altísimo.
        Entrégate al destino. Confía en que todo será para mejor, aunque no seas capaz de entenderlo ahora. Siéntate. Respira. Entrégate.`
    },

    {
        num: "XXXIV",

        titulo: "El Guerrero borra su rastro",

        texto: `A lo lejos, el Sol se eleva.
        Es la última vez para mí.
        Los lobos emprenden el viaje.
        Imagina que hoy es tu último día. ¿Estás preparado a morir? ¿Qué cosas quedarían pendientes, sin resolver con tu muerte? ¿Qué cosas lamentarías no haber hecho?
        
        Hoy es el día de borrar tu rastro. Atar los cabos sueltos, cerrar los círculos, barrer tus huellas. Di lo que tienes que decir, haz lo que tengas que hacer. Que sólo quede de ti la Luz de Buda en tus raíces y en tus hojas.
        
        ¿No ha sido hermoso acaso?`
    },

    {
        num: "XXXV",

        titulo: "El Guerrero muere",

        texto: `La Vida de un Guerrero es ardua. Tienes mil años, y ya es tiempo de descansar. Deja las armas, siéntate junto a tu hermano del Camino. Uno al lado del otro, contemplad el Sol ponerse en el silencioso desierto.
        De seguro extrañarás el mundo, tus amores, tus batallas. Más no te aflijas. Regresarás.`
    },

    {
        num: "XXXVI",

        titulo: "El Guerrero nace",

        texto: `La nieve se ha derretido.
        El bosque respira nuevamente.
        El Sol se refleja en el estanque...
        Una vez más.`
    },
]