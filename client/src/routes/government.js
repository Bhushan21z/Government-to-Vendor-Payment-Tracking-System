const express = require('express');
const router = express.Router();
const Government=require('./models/Government')


router.post('/', async (req, res) => {
  const { address, govtype, name, govmail, govpin } = req.body;
  try {
    const government = await Government.create({
      address,
      govtype,
      name,
      govmail,
      govpin,
    });
    res.status(201).json({ success: true, data: government });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

module.exports = router;
