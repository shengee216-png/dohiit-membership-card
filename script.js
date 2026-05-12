function generateCard(){

  document.getElementById("nameText").innerText =
    document.getElementById("memberName").value;

  document.getElementById("idText").innerText =
    document.getElementById("memberId").value;

  document.getElementById("typeText").innerText =
    document.getElementById("membershipType").value;

  document.getElementById("fromText").innerText =
    document.getElementById("validFrom").value;

  document.getElementById("thruText").innerText =
    document.getElementById("validThru").value;

}



function downloadCard() {
  const card = document.getElementById("card");

  requestAnimationFrame(() => {
    setTimeout(() => {

      html2canvas(card, {
        useCORS: true,
        allowTaint: false,
        scale: 2
      }).then(canvas => {

        const link = document.createElement("a");
        link.download = "dohiit-membership-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();

      });

    }, 300);
  });
}

document.getElementById("templateSelect").addEventListener("change", function () {
  const selected = this.value;
  const bg = document.getElementById("cardBg");

  if (selected === "male") {
    bg.src = "./male.jpg";
  }

  if (selected === "female") {
    bg.src = "./female.jpg";
  }
});