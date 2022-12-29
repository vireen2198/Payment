const mainBtn = document.querySelector(".main-btn");
mainBtn,
  addEventListener("click", (e) => {
    e.preventDefault();
    const domainName = window.location.href.split("/").slice(0, 3).join("/");
    return (window.location.href = domainName);
  });
