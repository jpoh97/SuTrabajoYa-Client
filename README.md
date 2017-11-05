# URL ppal 
`https://qfoi6sqsdi.execute-api.us-east-1.amazonaws.com/Prod/`

## servicios 

### `/client GET` 
devuelve el cliente propietario del token en el header
### `/login POST` 
recibe un json con "email", "password" retorna token
### `/client POST` 
recibe un json con  "identification" "name"	"lastname" "email" "password" "phone" "cellphone" "address" "city" "resume"
### `/client PUT`
actualiza el cliente propietario del token en el header con json del body con  "identification" "name"	"lastname" "email" "password" "phone" "cellphone" "address" "city" "resume"
### `/service POST`
crea un servicio asociado al propietario del token en el header recibe un json con "serviceName" "description" "cost"
### `/service GET`
retorna todos los servicios que hay en el sistema 
### `/service?id=serviceId GET`
retorna el servicio con id=serviceID
### `/service?search=string GET`
retorna los servicios que contenga el string en serviceName o description
### `/request POST` 
crea una solicitud asociada asociada al propietario del token con en servicId recibe el json "serviceId" "description" "startDate" "endDate"
### `/request GET` 
devuelve las solicitudes asociadas al propietario del token en el header