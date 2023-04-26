export default function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (!data.title) {
      alert("제목을 입력해주세요");
      return;
    }
    if (!data.content) {
      alert("내용을 입력해주세요.");
      return;
    }
    axios.post("/api/post/new", data).then((res) => {
      if (res.status === 200) {
        alert("글 작성에 성공했습니다");
        router.push("/list");
      } else {
        alert("글 작성에 실패하였습니다.");
      }
    });
    // action="/api/post/new" method="POST"
  
}