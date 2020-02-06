export default function(req, res) {
  console.log({ header: req.headers });
  res.json({
    yo: "Dustin"
  });
}
