export default function handler(req, res) {
    if(res.method === 'POST') {
        return (
            res.status(200).json('처리완료')
        )   
    }
    
}