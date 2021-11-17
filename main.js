const images = [
  'https://lh3.googleusercontent.com/fife/AAWUweWmji1XjXRy7piOe9TXn5D1CgROsb1FSEzAM-j2l_1eRh-snGnX-5HQq1wahZn8GIEAmgnIfTf646L8ulFUzLZAp71MpWpp0ubyboy6DEn4WGlKHcO--xX71Ajq32dOzB8EP1yctvPROO9_tE9Nk02eDTQ7S4tDt-pniKpIwGuoeUr_sQBufDYSMRvzH8WPTY2FKCW66r8hUpgZCzgdRpMzT8LxUFRcKdurafhxiOiLrHVCA3RXECwcUHrwrhuzr5V7ZV7AM6oZ75lH0HcshpcpVqBY4-cBYGxV8ZYpswqnCEjQU9PFVDpGT-OKpaCiB4CRrb57DUUGlq74cmKRI-NSqkgv5JVMHHE_Ae7KBbKZCTxZOCxkhDfGPfUYKcY8-BtpEMDn6RAPhrtexSa17Z1_TNMMi6brZ4Qxofo817uCszjaV_lOxgY2DzSN7aeLBsOUuHlkQkhRV_nTMtcaU_F8XM0L42KXfojbN0ndn7aCtIxd4y-qg6H55BToWlkQ-vA1K9Ptar5TERc0qR3KcBQkvnObq-NvJGpc7MMeHDLS1FUJmHydYuAIWV9yTQJ_CqpKzUWqC2sAPSQYLNGpk8IQjc62Fc8PtbzZhpxcFb5eQZLNZRfKBjsGF8fsjYak7vMUOIhuoF6-qWIFZW-HIZAncqCH5vYG7cvsWFDOraQPpEh3_Jp5qm-58Iqva_wUZkkrvWt_4g4L9MFGFk7NgQahAYCuLph2Vg=w1920-h969-ft',
  'https://lh3.googleusercontent.com/fife/AAWUweURp2Hiipv6NFz9x0NN7oNu6VdBGJKjnDMxtAc9cqonAHXKe8QzCm8RUuNanljvLCQxyL2gZXQsD-vBjpm3n2Yr81l7tqWlijgr8zBd5QBDdGEiEkgwQULdldYAS1E4GzzSdWBTuHlK2eK7XU1Fm_txZHVFgEyb4zTDR8OHuVDKhEP8tnloUltHaFrk7LGjUn5AaFddNZ1zMYuo7VbB2Bggfi0Dsfwvt--ArTnnKImNzVlv5pyp9kUnSm4kd-CDvp00J1PDHWx3WImHtXmaGDyUPXP1PbkrQjaWoqV5jPXBcbZ22e42Bs4l2ylgtFDdPY7PZYsPfcAeCivkHRyjthop1CjGv82_qRYcT9_DdJ5DNxxQeLO34MXADs2cFfzWuLNB4WM_-35G6WrVkk9XJiv6pjFaQ2jUVRk8KzGflX1aNoa9n_5CqlmISCDAQMzsTzv-OPRX4jb0BEvJorzNCDBOfIGpuvjqwoVPWjmCdUCHWQGrRLHQC6Di-2a8n7PwELiGv-nvYlJLbLUh06uwuMSFyNpMlpkzsLMPYG60W1fJRK4b_Vh1O2N4kvCOvdM4HOX2Dk5-frBNh9jxZJmNdyuP6xkfdwfxDp1qplrqx0vWit3eLHFMfqrIcx2g6zxqFLg1Y_dhTSSDxbgTcWgPZi8OrXhr_8wWUqoQSu-HpOpvFwrR7EM-YsveQDOuGS1NAMdIs0dNus_K725pZTf1cK4Hhbncmq-tPA=w1348-h969-ft',
  'https://lh3.googleusercontent.com/fife/AAWUweWwmnscfxdeNCOFAsSHHxdUkQexI4VDyjOs-HI8efqQIXT48rKMFWP7FxoF-CJnQhQ9vfz4iT8PbBunvttxgrxgdgE1WP0kMSmWjqzuHGTZR8Am9Ad6n0qGsUNifAcXoCUEMZNsnp20UkShKj_SKDr8eI41GUKr6wmbDUWQkhNg1B2og8vakSy1nk9RTyyT4ECEDE4xECP0JF1568Y-PDTHBM0uwFnOdBOqh3zwZFC2P70XOA92EivdtzAI86WCvBAau4r8nK0uX7BqDmTH4LrdT8VyrygC0Z7NdR9x7P6rlzr3O-XeT9b5jmrfZ3rPC7r2K_NXjQuWB3YGJYxv2AXq5ECwTeEXA372WeYaPUk2XzQKW5U48tM0H3nV2dPgPjdBxswyAqzFhXklNx55k1HGNkRJl9pCIDrhlVTpZbONBcJx1KC6vI6l5mwClJRuuDGZjDrXLIMjneyimEbVW_ebR2BZbwP6ILIx4UcqyiWT5Lomn-vrmC8iP1aeFq4TLiXG0PoBR9-9bH_sf5jJBJtvVbHmK4_4HlUPRpk8mFXFGP9zLW7o244TSiqN3-IHExF69nYC0zPtG-9nyFwd6pHZpSrsdFbU1VmPdu-UgrKEvsDPvgknZJghjIMC2WJwMIUurTPrb6q3sM1yaG0qWEUlyxlyRbjuiI4ogy30-YF85yn7XF3extYjB455K5PfzAUDZCWAqxtCe7MCbKo_dwd7Vs1OF1vC6g=w1348-h969-ft',
  'https://lh3.googleusercontent.com/fife/AAWUweV4i_IpigrOTCUWYIsjI0hNuov_U8iL6DmLapBoCHczyr3U5YSzXce3Yk6z9SOUfQ0x9GntR2lyl8CRW3cruLPoBqw1zkTfvI4F1ZnSUavoUhyBLdE4GLkB9Oi5C0ijXTpq3EzEyYMQ-wxrzkyLaajTw1ef32AvkPtUc5HNc2h-iLCDNIr84404kVUXQGWcg2uOdk_lbDkxkbwRVsZlUcCRHnk_OSMHDKTr3irgF9ikmaCyykOn_dZ8Eaf-tfsCgflC9Iqr7G9yu9vAMvO6ZGijydLGKqTVhQpt7xSVVi4G_rz15afleUtTVfApaha6L4TkLdvnvfxP1YzcSvmEOJv0sacqMbNpTS-XaosUenfyPIMQqBFZCkmJjNdDBujoYP3on0DQ5b10X0iLkrtfSMFcgtev5H35P4PSDW0gdHM4ZCCqQ10qXXIOqOoc0EgCqI4_Lvyb5jeaHs_MOU_vNAUMeVBcZdDy3geouw2XHIauecuckaLCGowiKe2r-HfoznYUinhsDxKC69N_iLsUJtnp7i5rLxSvP25lYJfFD5uUtwkAPfC4KFdnglCIufq89D5d8bbIzPa85T8uJfrc8Exef8F5fgR5addNjl_O-PIotjzmhy8V-sqNC83ki_nuT0LGgU-FCWT0-SClY8W5S33gNbzEA2cbp7LMH-aORC64snteKnXP2RjHW9eiIEQNshkkLImZaAHm8t4D5EiAwtd4juh-PnKscA=w1348-h969-ft',
]

const loadImageInCanvas = (imageName, idCanvas) => {
  console.log(imageName, idCanvas)
  const canvas = document.getElementById(idCanvas);
  const ctx = canvas.getContext("2d");

  const image = new Image();

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);
  };

  image.src = imageName;
};

const loadAltImageInCanvas = (data) => {
  let c = document.getElementById(data.canvasId);
  c.width = data.newImgData.width;
  c.height = data.newImgData.height;

  let ctx = c.getContext("2d");
  ctx.putImageData(data.newImgData, 0, 0);
};

// window.drawOriginal = (event) => {
//   var reader = new FileReader()
//   var original = document.getElementById('original')

//   reader.onload = function() {
//     original.src = reader.result
//   }

//   reader.readAsDataURL(event.target.files[0])

//   document.getElementById('original').onload = function()  {
//     image.src = original.src

//     var canvas = document.getElementById('original-canvas')
//     canvas.width = image.width
//     canvas.height = image.height

//     var ctx = canvas.getContext('2d')
//     ctx.drawImage(image, 0, 0)
//     imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
//   }
// }

const transform = async (src, canvasId) => {
  const image = new Image();
  let imageData
  var canvas = document.getElementById(canvasId)
  var ctx = canvas.getContext('2d')

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
  };

  image.crossOrigin = "";
  image.src = src;
  imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

  var pixels = imageData.data.slice()
  var transformedPixels = await holt(image, pixels)

  var newImage = new ImageData(canvas.width, canvas.height)
  newImage.data.set(transformedPixels)

  ctx.putImageData(newImage, 0, 0)
}

const main = () => {
  images.forEach((img, index) => {
    loadImageInCanvas(img, `image${index+1}`);
    transform(img, `resultImage${index+1}`)
  })
}

main()