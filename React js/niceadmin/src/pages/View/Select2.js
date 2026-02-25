import { useEffect } from "react";
import $ from "jquery";
import "select2/dist/css/select2.min.css";
import "select2";

export default function Select2Example() {
  useEffect(() => {
    $(document).ready(function () {
      $(".js-example-basic-single").select2();
    });
  }, []);

  return (
    <div className="p-6 mt-16 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <label
        htmlFor="id_label_single"
        className="block text-lg font-medium text-gray-700"
      >
        Select an Option
      </label>
      <select
        className="js-example-basic-single w-full form-control border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
        id="id_label_single"
      >
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
  );
}
