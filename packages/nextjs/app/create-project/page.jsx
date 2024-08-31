// pages/index.js
import FormComponent from "./components/FormComponent";
import ProjectLayout from "./components/ProjectLayout";

export default function page() {
  return (
    <div>
      <ProjectLayout>
        <FormComponent />
      </ProjectLayout>
    </div>
  );
}
