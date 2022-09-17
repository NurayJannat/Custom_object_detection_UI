
export default async function handler(req, res) {
    if (req.method == 'POST') {
        console.log("inside api")
        const img = req.body['img']
        
        const response = await fetch(
            `http://0.0.0.0:8000/object-detection/`,
            {
              body: JSON.stringify({img_base64: img}),
              headers: {
                // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
                'Content-Type': 'application/json',
              },
              method: 'POST'
            }
          );

        const data = await response.json();
        // console.log("face data", data)
        return res.status(200).json({ 
          data
       });

        // if("error" in data)
        // {
        //     return res.status(data['error']['statusCode']).json({ message: data['error']['message'] });
        // }
        // else if("data" in data)
        // {
        //     return res.status(200).json({ 
        //        data
        //     });
        // }
    }
}