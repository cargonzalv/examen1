# GitHub followers. Exámen 1 de WebDev.

Para la realización del proyecto se utilizaron herramientas como CSS, Javascript y HTML, sobre frameworks y librerías como Node, Express y React. Por último se implementó una base de datos no relacional con MongoDB

# MongoDB
 Se aprovechó la posibilidad de usar MongoDB para eliminar una de las más grandes limitaciones al trabajar con la API de GitHub: Mongo es el principal encargado de consultar los followers que tiene una persona en específico, basado en lo que ha recopilado antes. Si no lo encuentra, ahí entra la API de Github, que hace la respuesta y simultáneamente guarda la misma en la base de datos de Mongo, para que la próxima vez pueda responder la base de datos.
 
 # Salsa secreta.
 
 Además de la estrategia implementada en mongo para ahorrar tiempo y recursos, lo que diferencia a mi proyecto es la presentación del mismo. Establecí una estructura jerárquica de árbol basado en el usuario que se le pide sus followers, y luego se le puede hacer click a los followers de esos followers para ver los suyos, sin perder a la primera persona que se consultó. Así, se cumplió el requerimiento asignado de una sencilla al unir el requerimiento principal con el de tener un historial de las relaciones entre las personas que se siguen entre sí. 
 
 Carlos González
 201511169
 
