import { Container } from "./Container";

export function Footer() {
  return (
    <>
      <footer className="border bg-gray-900 text-white">
        <Container>
          <div className="py-32">
            <p> Made with love by Frank Hartman and Katja van Weert</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
