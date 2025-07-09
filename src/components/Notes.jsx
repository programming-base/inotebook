function Notes() {
  let data = [
    {
      _id: "686a9ddfd95f23b745c9d8f3",
      user: "686962a53bf0e9f84280b9f2",
      title: "My note",
      description: "ertyuihgfbnm",
      tag: "general",
      date: "2025-07-06T16:01:35.686+00:00",
      __v: 0,
    },
    {
      _id: "686a9ddfd95f23b745c9d8f3",
      user: "686962a53bf0e9f84280b9f2",
      title: "My note",
      description: "ertyuihgfbnm",
      tag: "general",
      date: "2025-07-06T16:01:35.686+00:00",
      __v: 0,
    },
    {
      _id: "686a9ddfd95f23b745c9d8f3",
      user: "686962a53bf0e9f84280b9f2",
      title: "My note",
      description: "ertyuihgfbnm",
      tag: "general",
      date: "2025-07-06T16:01:35.686+00:00",
      __v: 0,
    },
    {
      _id: "686a9ddfd95f23b745c9d8f3",
      user: "686962a53bf0e9f84280b9f2",
      title: "My note",
      description: "ertyuihgfbnm",
      tag: "general",
      date: "2025-07-06T16:01:35.686+00:00",
      __v: 0,
    },
    {
      _id: "686a9ddfd95f23b745c9d8f3",
      user: "686962a53bf0e9f84280b9f2",
      title: "My note",
      description: "ertyuihgfbnm",
      tag: "general",
      date: "2025-07-06T16:01:35.686+00:00",
      __v: 0,
    },
  ];
  return (
    <main className=" w-[100%] h-[100%]">
      <div className="text-black flex flex-col place-items-center p-3">
        {data.map((note, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 m-2 w-[90%]">
              <div key={note._id}>
                <h1 className="unset-all"><b>{note.title}</b></h1>
              </div>
              <h4>{note.description}</h4>
            </div>
          );
        })}
      </div>
    </main>
  );
}
export default Notes;
