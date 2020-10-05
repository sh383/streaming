export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const join = (req, res) => {
  if (req.method === "GET") {
    res.render("join", { pageTitle: "Join" });
  } else if (req.method === "POST") {
    const {
      body: { title, description },
    } = req;
  }
};
