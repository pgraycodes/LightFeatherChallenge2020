const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const caesarsShiftUtil = require('../utils/caesarsShift');

// @desc      Cipher users MSG  based on Shift value in req body
// @route     POST /api/encode
// @access    Public

exports.cipherMethod = asyncHandler(async (req, res, next) => {
  const { msg, shift } = req.body;
  // regex and interger validation
  //to handle submission of string for shift value
  let isShiftValueValid = /^-?\d+$/.test(shift);
  let isShiftValueAnInteger = Number.isInteger(shift);

  if (!isShiftValueValid || !isShiftValueAnInteger) {
    return next(new ErrorResponse('', 500));
  }

  let encodedMSG = await caesarsShiftUtil(msg, shift);

  res.status(200).json({
    data: { encodedMSG },
  });
});
