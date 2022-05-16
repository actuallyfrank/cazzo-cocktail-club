import { Container } from "./Container";

export function Footer() {
  return (
    <>
      <footer className="border bg-gray-900 text-white">
        <Container>
          <div className="py-32">
            <p> Made with ❤️ by Frank Hartman</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
