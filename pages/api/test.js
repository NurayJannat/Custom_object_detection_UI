
export default async function handler(req, res) {
    if (req.method == 'GET') {

        console.log("entered")
    
        
        const response = await fetch(
            `http://0.0.0.0:8000/`,
            {
            //   body: JSON.stringify({img_one: img_one, img_two: img_two, key: key}),
              headers: {
                // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
                'Content-Type': 'application/json',
              },
              method: 'GET'
            }
          );

        const data = await response.json();
        console.log("test msg", data)
        return res.status(200).json({ 
          data
       });

    }
}