const images = [
  "https://lh3.googleusercontent.com/fife/AAWUweWmji1XjXRy7piOe9TXn5D1CgROsb1FSEzAM-j2l_1eRh-snGnX-5HQq1wahZn8GIEAmgnIfTf646L8ulFUzLZAp71MpWpp0ubyboy6DEn4WGlKHcO--xX71Ajq32dOzB8EP1yctvPROO9_tE9Nk02eDTQ7S4tDt-pniKpIwGuoeUr_sQBufDYSMRvzH8WPTY2FKCW66r8hUpgZCzgdRpMzT8LxUFRcKdurafhxiOiLrHVCA3RXECwcUHrwrhuzr5V7ZV7AM6oZ75lH0HcshpcpVqBY4-cBYGxV8ZYpswqnCEjQU9PFVDpGT-OKpaCiB4CRrb57DUUGlq74cmKRI-NSqkgv5JVMHHE_Ae7KBbKZCTxZOCxkhDfGPfUYKcY8-BtpEMDn6RAPhrtexSa17Z1_TNMMi6brZ4Qxofo817uCszjaV_lOxgY2DzSN7aeLBsOUuHlkQkhRV_nTMtcaU_F8XM0L42KXfojbN0ndn7aCtIxd4y-qg6H55BToWlkQ-vA1K9Ptar5TERc0qR3KcBQkvnObq-NvJGpc7MMeHDLS1FUJmHydYuAIWV9yTQJ_CqpKzUWqC2sAPSQYLNGpk8IQjc62Fc8PtbzZhpxcFb5eQZLNZRfKBjsGF8fsjYak7vMUOIhuoF6-qWIFZW-HIZAncqCH5vYG7cvsWFDOraQPpEh3_Jp5qm-58Iqva_wUZkkrvWt_4g4L9MFGFk7NgQahAYCuLph2Vg=w1920-h969-ft",
  "https://lh3.googleusercontent.com/fife/AAWUweURp2Hiipv6NFz9x0NN7oNu6VdBGJKjnDMxtAc9cqonAHXKe8QzCm8RUuNanljvLCQxyL2gZXQsD-vBjpm3n2Yr81l7tqWlijgr8zBd5QBDdGEiEkgwQULdldYAS1E4GzzSdWBTuHlK2eK7XU1Fm_txZHVFgEyb4zTDR8OHuVDKhEP8tnloUltHaFrk7LGjUn5AaFddNZ1zMYuo7VbB2Bggfi0Dsfwvt--ArTnnKImNzVlv5pyp9kUnSm4kd-CDvp00J1PDHWx3WImHtXmaGDyUPXP1PbkrQjaWoqV5jPXBcbZ22e42Bs4l2ylgtFDdPY7PZYsPfcAeCivkHRyjthop1CjGv82_qRYcT9_DdJ5DNxxQeLO34MXADs2cFfzWuLNB4WM_-35G6WrVkk9XJiv6pjFaQ2jUVRk8KzGflX1aNoa9n_5CqlmISCDAQMzsTzv-OPRX4jb0BEvJorzNCDBOfIGpuvjqwoVPWjmCdUCHWQGrRLHQC6Di-2a8n7PwELiGv-nvYlJLbLUh06uwuMSFyNpMlpkzsLMPYG60W1fJRK4b_Vh1O2N4kvCOvdM4HOX2Dk5-frBNh9jxZJmNdyuP6xkfdwfxDp1qplrqx0vWit3eLHFMfqrIcx2g6zxqFLg1Y_dhTSSDxbgTcWgPZi8OrXhr_8wWUqoQSu-HpOpvFwrR7EM-YsveQDOuGS1NAMdIs0dNus_K725pZTf1cK4Hhbncmq-tPA=w1348-h969-ft",
  "https://lh3.googleusercontent.com/fife/AAWUweWwmnscfxdeNCOFAsSHHxdUkQexI4VDyjOs-HI8efqQIXT48rKMFWP7FxoF-CJnQhQ9vfz4iT8PbBunvttxgrxgdgE1WP0kMSmWjqzuHGTZR8Am9Ad6n0qGsUNifAcXoCUEMZNsnp20UkShKj_SKDr8eI41GUKr6wmbDUWQkhNg1B2og8vakSy1nk9RTyyT4ECEDE4xECP0JF1568Y-PDTHBM0uwFnOdBOqh3zwZFC2P70XOA92EivdtzAI86WCvBAau4r8nK0uX7BqDmTH4LrdT8VyrygC0Z7NdR9x7P6rlzr3O-XeT9b5jmrfZ3rPC7r2K_NXjQuWB3YGJYxv2AXq5ECwTeEXA372WeYaPUk2XzQKW5U48tM0H3nV2dPgPjdBxswyAqzFhXklNx55k1HGNkRJl9pCIDrhlVTpZbONBcJx1KC6vI6l5mwClJRuuDGZjDrXLIMjneyimEbVW_ebR2BZbwP6ILIx4UcqyiWT5Lomn-vrmC8iP1aeFq4TLiXG0PoBR9-9bH_sf5jJBJtvVbHmK4_4HlUPRpk8mFXFGP9zLW7o244TSiqN3-IHExF69nYC0zPtG-9nyFwd6pHZpSrsdFbU1VmPdu-UgrKEvsDPvgknZJghjIMC2WJwMIUurTPrb6q3sM1yaG0qWEUlyxlyRbjuiI4ogy30-YF85yn7XF3extYjB455K5PfzAUDZCWAqxtCe7MCbKo_dwd7Vs1OF1vC6g=w1348-h969-ft",
  "https://lh3.googleusercontent.com/fife/AAWUweV4i_IpigrOTCUWYIsjI0hNuov_U8iL6DmLapBoCHczyr3U5YSzXce3Yk6z9SOUfQ0x9GntR2lyl8CRW3cruLPoBqw1zkTfvI4F1ZnSUavoUhyBLdE4GLkB9Oi5C0ijXTpq3EzEyYMQ-wxrzkyLaajTw1ef32AvkPtUc5HNc2h-iLCDNIr84404kVUXQGWcg2uOdk_lbDkxkbwRVsZlUcCRHnk_OSMHDKTr3irgF9ikmaCyykOn_dZ8Eaf-tfsCgflC9Iqr7G9yu9vAMvO6ZGijydLGKqTVhQpt7xSVVi4G_rz15afleUtTVfApaha6L4TkLdvnvfxP1YzcSvmEOJv0sacqMbNpTS-XaosUenfyPIMQqBFZCkmJjNdDBujoYP3on0DQ5b10X0iLkrtfSMFcgtev5H35P4PSDW0gdHM4ZCCqQ10qXXIOqOoc0EgCqI4_Lvyb5jeaHs_MOU_vNAUMeVBcZdDy3geouw2XHIauecuckaLCGowiKe2r-HfoznYUinhsDxKC69N_iLsUJtnp7i5rLxSvP25lYJfFD5uUtwkAPfC4KFdnglCIufq89D5d8bbIzPa85T8uJfrc8Exef8F5fgR5addNjl_O-PIotjzmhy8V-sqNC83ki_nuT0LGgU-FCWT0-SClY8W5S33gNbzEA2cbp7LMH-aORC64snteKnXP2RjHW9eiIEQNshkkLImZaAHm8t4D5EiAwtd4juh-PnKscA=w1348-h969-ft",
  "https://lh3.googleusercontent.com/fife/AAWUweWmDhTBPcjtZQiJMKXjr7MPgOMW1OQtoEl0nXaOcYt1axiue-20Nca3pJCuHSc8-QzmwDoAEGHznJLT3E1D0JBefuNUcI3xF3g9TuaHZXFaCYVJIqKw2q7fDJFlHvhoRFQYFB4gfX3FKcUHTFMO7qmVZ4yuyP5mHJKXlPqf9HbnSpfA7ykRe6KoiPZJXYjm4zHlG7wyzY5YJ2ZIUOiizhz7GG0niIJLv6ELnvszCyNDYlaospEzPEt3qSXZkT8-qnj9oqgJjQu6_eiLqlykiayKueobge2__sHcvt_2_fOyUdxWT3-ld8cpgJNbnWnmZ816FoeFJ1tva2zTUFzuZKnkcbVU3Ofyqkj1SLbq6RDRaW00WJUEURb8LRkDjZs5EzGjUT_3VByqbyTvutrlK1TqUMU5F3RSlAi95YE-4H--fjZ359lDQ28_OqCqrmGug6R21eM43AuhPd5tmLTobC09OgVpa6cQ2Lf1OnyynawQiZDW1XMGCJ_3a5NKWbp-SV8WKPkSN7uabVGureMcPg-Af0SVgOeXrmrovgaGOsWM-bu_KFRRuEMBA-y1sMldowCEeuKWe-yQ-Mo5hKvlvOvIeRwKp6-JnjnhVybuUA8O0w-vJ7XaozpHayeXgBppO43PoHBehRsgpJLW5yKbCFaSTQiPfP5FXfXbhlHBF60UueQ43SQE3DeumFmNe_U_DfQxmWeMIXk_r2Pg55MXgRuv06xmK5wC7g=w1920-h969-ft",
];

const loadImageInCanvas = (src, idCanvas) => {
  const canvas = document.getElementById(idCanvas);
  const ctx = canvas.getContext("2d");

  const image = new Image();
  let imgData;

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    return imgData;
  };

  image.crossOrigin = "";
  image.src = src;
};

const prepareImg = (src, canvasId) => {
  return new Promise((resolve) => {
    let image = new Image();
    let canvas = document.getElementById(canvasId);

    image.onload = async function () {
      let width = image.width;
      let height = image.height;
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);

      resolve({
        image,
        imgData: ctx.getImageData(0, 0, canvas.width, canvas.height),
      });
    };

    image.crossOrigin = "";
    image.src = src;
  });
};

const transform = async (src, originalCanvas, canvasResultId) => {
  const { image, imgData } = await prepareImg(src, originalCanvas);

  var pixels = imgData.data.slice();
  var transformedPixels = await holt(image, pixels);

  let canvas = document.getElementById(canvasResultId);
  var ctx = canvas.getContext("2d");

  var newImage = new ImageData(image.width, image.height);

  canvas.width = newImage.width;
  canvas.height = newImage.height;

  newImage.data.set(transformedPixels);

  ctx.putImageData(newImage, 0, 0);
};

const lodash = _;
const checkIfPixelIsBlack = (color) => color < 255;

const isEdge = (matrix, x, y) => {
  var L = matrix[x + 1][y][0];
  var SO = matrix[x - 1][y + 1][0];
  var S = matrix[x][y + 1][0];
  var SE = matrix[x + 1][y + 1][0];
  var NO = matrix[x - 1][y - 1][0];
  var N = matrix[x][y - 1][0];
  var NE = matrix[x + 1][y - 1][0];
  var O = matrix[x - 1][y][0];

  let neighbors =
    checkIfPixelIsBlack(NO) +
    checkIfPixelIsBlack(N) +
    checkIfPixelIsBlack(NE) +
    checkIfPixelIsBlack(O) +
    checkIfPixelIsBlack(L) +
    checkIfPixelIsBlack(SO) +
    checkIfPixelIsBlack(S) +
    checkIfPixelIsBlack(SE);

  if (neighbors < 2 || neighbors > 6) return false;

  let connectivity = 0;

  if (!checkIfPixelIsBlack(N) && checkIfPixelIsBlack(NE)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(NE) && checkIfPixelIsBlack(L)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(L) && checkIfPixelIsBlack(SE)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(SE) && checkIfPixelIsBlack(S)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(S) && checkIfPixelIsBlack(SO)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(SO) && checkIfPixelIsBlack(O)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(O) && checkIfPixelIsBlack(NO)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(NO) && checkIfPixelIsBlack(N)) {
    connectivity++;
  }

  if (connectivity == 1) {
    return true;
  } else {
    return false;
  }
};

const holt = (image, pixels) => {
  return new Promise((resolve) => {
    var matrix = lodash.chain(pixels).chunk(4).chunk(image.width).value();

    var newMatrix = lodash.cloneDeep(matrix);

    var removeList = [];
    var noPixelsDeleted = false;

    while (noPixelsDeleted == false) {
      noPixelsDeleted = true;

      for (let y = 1; y < image.height - 1; y++) {
        for (let x = 1; x < image.width - 1; x++) {
          let color = newMatrix[x][y][0];

          if (checkIfPixelIsBlack(color)) {
            let L = newMatrix[x + 1][y][0];
            let S = newMatrix[x][y + 1][0];
            let N = newMatrix[x][y - 1][0];
            let O = newMatrix[x - 1][y][0];

            if (
              (!isEdge(newMatrix, x, y) ||
                (checkIfPixelIsBlack(L) &&
                  checkIfPixelIsBlack(S) &&
                  (checkIfPixelIsBlack(N) || checkIfPixelIsBlack(O)))) == false
            ) {
              noPixelsDeleted = false;

              removeList.push({ x: x, y: y });
            }
          }
        }
      }

      removeList.forEach((pix) => {
        newMatrix[pix.x][pix.y] = [255, 255, 255, 255];
      });
      removeList = [];

      for (let y = 1; y < image.height - 1; y++) {
        for (let x = 1; x < image.width - 1; x++) {
          let color = newMatrix[x][y][0];

          if (checkIfPixelIsBlack(color)) {
            let L = newMatrix[x + 1][y][0];
            let S = newMatrix[x][y + 1][0];
            let N = newMatrix[x][y - 1][0];
            let O = newMatrix[x - 1][y][0];

            if (
              (!isEdge(newMatrix, x, y) ||
                (checkIfPixelIsBlack(O) &&
                  checkIfPixelIsBlack(N) &&
                  (checkIfPixelIsBlack(S) || checkIfPixelIsBlack(L)))) == false
            ) {
              noPixelsDeleted = false;
              removeList.push({ x: x, y: y });
            }
          }
        }
      }

      removeList.forEach((pix) => {
        newMatrix[pix.x][pix.y] = [255, 255, 255, 255];
      });
      removeList = [];
    }

    resolve(lodash.flattenDeep(newMatrix));
  });
};

const main = () => {
  images.forEach((img, index) => {
    loadImageInCanvas(img, `image${index + 1}`);
    transform(img, `image${index + 1}`, `resultImage${index + 1}`);
  });
};

main();
